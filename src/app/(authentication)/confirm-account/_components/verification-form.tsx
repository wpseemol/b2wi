'use client';

import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export default function VerificationForm() {
    const boxArray = [1, 2, 3, 4, 5, 6];
    const inputRefs = useRef<HTMLInputElement[]>([]);

    const searchParams = useSearchParams();

    function handleInputChange(
        event: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) {
        const value = event.target.value;

        if (value.length === 1 && index < boxArray.length - 1) {
            // Move to the next input
            inputRefs.current[index + 1]?.focus();
        } else if (value.length === 0 && index > 0) {
            // Move to the previous input if backspacing
            inputRefs.current[index - 1]?.focus();
        }
    }

    function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
        const pastedData = event.clipboardData
            .getData('text')
            .slice(0, boxArray.length);
        const chars = pastedData.split('');

        chars.forEach((char, index) => {
            if (inputRefs.current[index]) {
                inputRefs.current[index]!.value = char;
            }
        });

        // Move focus to the next field after the last filled field
        if (chars.length > 0) {
            inputRefs.current[
                Math.min(chars.length, boxArray.length) - 1
            ]?.focus();
        }
    }

    async function verificationSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const otp = inputRefs.current
            .map((input) => input?.value || '')
            .join('');

        if (otp.length < boxArray.length) {
            alert('Please fill in all the OTP fields before submitting.');
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BASS_URL}api/v1/user/confirm-otp`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: searchParams.username,
                        otp,
                    }),
                }
            );

            console.log('response: ', response);

            const isCreated = await response.json();
            //confirm-account?username=seemol-chakroborti

            console.log('isCreated:', isCreated);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="mt-6" onSubmit={verificationSubmit}>
            <div className="flex space-x-2 justify-center">
                {boxArray.map((item, index) => (
                    <input
                        key={item}
                        type="text"
                        maxLength={1}
                        ref={(el) => {
                            if (el) inputRefs.current[index] = el;
                        }}
                        onChange={(e) => handleInputChange(e, index)}
                        onPaste={handlePaste}
                        className="sm:w-12 w-10 sm:h-12 h-10 text-center border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                ))}
            </div>

            <button
                type="submit"
                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
            >
                Verify OTP
            </button>
        </form>
    );
}
