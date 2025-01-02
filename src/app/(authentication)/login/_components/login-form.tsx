'use client';

import { Form, FormField } from '@/components/ui/form';
import { registerForm } from '@/lib/schema/zod/register-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormControl, FormItem, FormMessage } from '@/components/ui/form';
import { loginFormSchema } from '@/lib/schema/zod/login-form-schema';
import { PiEyeClosedDuotone, PiEyeDuotone } from 'react-icons/pi';

export default function LoginForm() {
    const [showPass, setShowPass] = useState<boolean>(false);

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    async function onSubmit(values: z.infer<typeof registerForm>) {
        console.log(values);
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

                        <div className="relative">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl className="w-full block">
                                            <input
                                                type={
                                                    showPass
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                className="!bg-transparent !ring-0 !shadow-none border-0 outline-0 border-b border-blue-950 border-black-normal py-3 pl-3 focus:border-primary transition-all"
                                                placeholder="Password"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {showPass ? (
                                <PiEyeDuotone
                                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                                    onClick={() => {
                                        setShowPass((prev) => !prev);
                                    }}
                                />
                            ) : (
                                <PiEyeClosedDuotone
                                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                                    onClick={() => {
                                        setShowPass((prev) => !prev);
                                    }}
                                />
                            )}
                        </div>
                        <div className="text-right my-2">
                            <Link
                                href={'/#'}
                                className="text-primary transition-colors hover:text-primary-500-dark"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            disabled={form.formState.isSubmitting}
                            type="submit"
                            className="bg-primary text-white font-semibold py-2 px-3 rounded-md hover:bg-neutral-900 transition-all"
                        >
                            {form.formState.isSubmitting
                                ? 'Sign In....'
                                : 'Login'}
                        </button>
                    </div>
                </form>
            </Form>
        </section>
    );
}
