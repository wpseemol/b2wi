'use client';

import { Form, FormField } from '@/components/ui/form';
import { registerForm } from '@/lib/schema/zod/register-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormControl, FormItem, FormMessage } from '@/components/ui/form';

export default function SingUpForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm<z.infer<typeof registerForm>>({
        resolver: zodResolver(registerForm),
        defaultValues: {
            fullName: '',
            email: '',
        },
    });

    function onSubmit(values: z.infer<typeof registerForm>) {
        console.log('onsubmit:', values);
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

                        {/* password find here  */}
                        {/* <PasswordFiled /> */}
                        {/* <div className="text-right my-4">
                        <Link
                            href={'/#'}
                            className="text-primary transition-colors hover:text-primary-500-dark"
                        >
                            Forgot Password?
                        </Link>
                    </div> */}

                        <button
                            disabled={form.formState.isSubmitting}
                            className="hidden"
                            onClick={() => setLoading(false)}
                        ></button>

                        <button
                            disabled={loading}
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
        </section>
    );
}
