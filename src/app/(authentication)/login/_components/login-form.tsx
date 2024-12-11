'use client';

import Link from 'next/link';
import { useState } from 'react';
import PasswordFiled from './password-filed';

export default function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <form
            // onSubmit={handleSubmit}
            className="w-full select-none"
        >
            <div className="flex flex-col gap-[20px]">
                <input
                    type="email"
                    name="email"
                    autoComplete="username"
                    className="!bg-transparent !ring-0 !shadow-none border-0 outline-0 border-b border-blue-950 border-black-normal py-3 pl-3 focus:border-primaryColor transition-all"
                    placeholder="Email address"
                />

                <PasswordFiled />
                <div className="text-right my-4">
                    <Link
                        href={'/#'}
                        className="text-primaryColor transition-colors hover:text-primary-500-dark"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <button
                    className="hidden"
                    onClick={() => setLoading(false)}
                ></button>

                <button
                    disabled={loading}
                    type="submit"
                    className="bg-primaryColor text-white font-semibold py-2 px-3 rounded-md hover:!bg-primary hover:bg-primary-500-dark transition-all"
                >
                    {loading ? 'Sign In....' : 'Login'}
                </button>
            </div>
        </form>
    );
}
