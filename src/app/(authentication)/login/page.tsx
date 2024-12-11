/** @format */

import AlertMessage from './_components/alert-message';
import LoginForm from './_components/login-form';
import LoginPageHeader from './_components/login-page-header';

export default function LongPage() {
    return (
        <main>
            <section className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-14 bg-[#fcfaff] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center sm:w-2/5 sm:px-0 px-2 ">
                    {/* set alert message */}
                    <AlertMessage />

                    <LoginPageHeader />

                    <LoginForm />
                </div>
            </section>
        </main>
    );
}
