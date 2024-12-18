import Link from 'next/link';

export default function SingUpPageHeader() {
    return (
        <section>
            <h1 className="text-center text-4xl font-bold dark:text-background">
                Sing Up
            </h1>
            <div className="mb-8 dark:text-background">
                Already have an account?{' '}
                <Link
                    className="text-primary transition-colors hover:text-primary-500-dark underline"
                    href={'/login'}
                >
                    Log in
                </Link>
            </div>
        </section>
    );
}
