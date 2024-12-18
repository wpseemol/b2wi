/** @format */

import Link from 'next/link';

export default function LoginPageHeader() {
    return (
        <section>
            <h1 className="text-center text-4xl font-bold dark:text-background">
                Welcome back
            </h1>
            <div className="mb-8 dark:text-background">
                Don’t have an account?{' '}
                <Link
                    className="text-primary transition-colors hover:text-primary-500-dark underline"
                    href={'/signup'}
                >
                    Sign Up
                </Link>
            </div>
        </section>
    );
}
