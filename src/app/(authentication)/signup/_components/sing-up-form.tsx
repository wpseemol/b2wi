'use client';

import { Form, FormField } from '@/components/ui/form';
import { registerForm } from '@/lib/schema/zod/register-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { ToastAction } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { PasswordFiled } from './password-filed';

export default function SingUpForm() {
    const router = useRouter();

    const { toast } = useToast();

    const form = useForm<z.infer<typeof registerForm>>({
        resolver: zodResolver(registerForm),
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof registerForm>) {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASS_URL}api/v1/user/register`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                }
            );

            const isCreated = await response.json();
            console.log('response: ', isCreated);

            if (response.ok) {
                if (isCreated.mailSend.error) {
                    // user created but email some reason email can't send.
                    toast({
                        variant: 'success',
                        title: 'Uh oh! Something went wrong.',
                        description:
                            'Account created, but verification email failed to send. Please try again later.',
                    });
                    return;
                }

                toast({
                    variant: 'success',
                    title: 'Registration Successful!',
                    description: isCreated.message,
                });

                router.push(`/confirm-account?username=${isCreated.username}`);
            }

            //confirm-account?username=seemol-chakroborti
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
                action: (
                    <ToastAction altText="Try again">Try again</ToastAction>
                ),
            });
        }
    }

    return (
        <section className="w-full">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" select-none"
                >
                    <div className="flex flex-col gap-[20px]">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl className="w-full">
                                        <input
                                            className="!bg-transparent !ring-0 !shadow-none border-0 outline-0 border-b border-blue-950 border-black-normal py-3 pl-3 focus:border-primary transition-all"
                                            placeholder="Full name"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl className="w-full">
                                        <input
                                            className="!bg-transparent !ring-0 !shadow-none border-0 outline-0 border-b border-blue-950 border-black-normal py-3 pl-3 focus:border-primary transition-all"
                                            placeholder="Email address"
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* password filed */}
                        <PasswordFiled form={form} />

                        <button
                            disabled={form.formState.isSubmitting}
                            type="submit"
                            className="bg-primary text-white font-semibold py-2 px-3 rounded-md hover:bg-neutral-900 transition-all mt-5"
                        >
                            {form.formState.isSubmitting
                                ? 'Sending code...'
                                : 'Send code'}
                        </button>
                    </div>
                </form>
            </Form>
            <Toaster />
        </section>
    );
}
