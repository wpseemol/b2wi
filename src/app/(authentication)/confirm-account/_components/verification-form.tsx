'use client';

export default function VerificationForm() {
    return (
        <form className="mt-6">
            <div className="flex space-x-2 justify-center">
                {boxArray.map((item) => (
                    <input
                        key={item}
                        type="text"
                        maxLength={1}
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

const boxArray = [1, 2, 3, 4, 5, 6];
