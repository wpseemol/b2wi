/** @format */

import LoginErrorProviders from '@/components/providers/login-error-providers';
import AlertMessage from './_components/alert-message';
import LoginForm from './_components/login-form';
import LoginPageHeader from './_components/login-page-header';

export default function LongPage() {
    return (
        <main>
            <section className="h-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-14 bg-[#fcfaff] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center sm:w-2/5 sm:px-0 px-2 ">
                    {/* login error provider */}
                    <LoginErrorProviders>
                        {/* set alert message */}
                        <AlertMessage />

                        <LoginPageHeader />

                        <LoginForm />
                    </LoginErrorProviders>
                </div>
            </section>
        </main>
    );
}
