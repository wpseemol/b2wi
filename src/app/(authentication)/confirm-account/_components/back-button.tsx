export default function BackButton() {
    return (
        <button
            onClick={() => router.back()}
            className="flex items-center text-blue-500 hover:text-blue-600 mb-4"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
            Back
        </button>
    );
}
