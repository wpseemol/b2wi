/** @format */

import Link from 'next/link';

export default function LoginPageHeader() {
    return (
        <>
            <h1 className="text-center text-4xl font-bold">Welcome back</h1>
            <div className="mb-8">
                Don’t have an account?{' '}
                <Link
                    className="text-primary transition-colors hover:text-primary-500-dark"
                    href={'/signup'}
                >
                    Sign Up
                </Link>
            </div>
        </>
    );
}
