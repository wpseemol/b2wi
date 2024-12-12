import SingUpForm from './_components/sing-up-form';
import SingUpPageHeader from './_components/sing-up-page-header';

export default function SingUpPage() {
    return (
        <main>
            <section className="h-screen px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-14 bg-[#fcfaff] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center sm:w-2/5 sm:px-0 px-2 ">
                    {/* set alert message */}

                    {/* register header */}
                    <SingUpPageHeader />

                    {/* register form */}
                    <SingUpForm />
                </div>
            </section>
        </main>
    );
}
