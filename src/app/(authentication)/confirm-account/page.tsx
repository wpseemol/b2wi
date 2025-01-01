import { notFound, redirect } from 'next/navigation';
import BackButton from './_components/back-button';
import VerificationForm from './_components/verification-form';

export default async function ConfirmAccountPage({
    searchParams,
}: {
    searchParams: Promise<{ username: string; token: string }>;
}) {
    // Search params empty got to not fond page.

    const { username, token } = await searchParams;

    if (!username) {
        notFound();
        return null; // Required to avoid rendering further
    }

    if (token) {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASS_URL}api/v1/user/confirm-otp`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    otp: token,
                }),
            }
        );

        if (response.ok) {
            redirect('/login');
        }
    }

    return (
        <main>
            <section>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                        {/* back button */}
                        <BackButton />

                        <h2 className="text-2xl font-bold text-center text-gray-800">
                            OTP Verification
                        </h2>
                        <p className="mt-2 text-center text-gray-600">
                            Enter the OTP sent to your email or phone number.
                        </p>

                        <VerificationForm />

                        <p className="mt-4 text-center text-gray-600">
                            Didn&apos;t receive the code?{' '}
                            <button className="text-blue-500 hover:underline">
                                Resend OTP
                            </button>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
