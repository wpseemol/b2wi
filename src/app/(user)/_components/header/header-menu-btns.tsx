'use client';

import { useRouter } from 'next/navigation';

export function AccessYourProfileBtn() {
    const router = useRouter();

    return (
        <button
            onClick={() => {
                router.push('/assessment');
            }}
            className="bg-transparent border-2 
                    hover:scale-105 duration-300 hover:bg-transparent font-medium text-neutral-50 text-center text-sm 
                border-[#1d87d3] px-3 py-1 rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto md:mx-0 text-nowrap lg:tracking-tighter 2xl:tracking-normal"
        >
            Assess Your Profile
        </button>
    );
}

export function BookConsultationBtn() {
    return (
        <button
            className="bg-transparent border-2 
                    hover:scale-105 duration-300 hover:bg-transparent font-medium text-neutral-50 text-center text-sm 
                border-[#1d87d3] px-3 py-1 rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] mx-auto md:mx-0 text-nowrap lg:tracking-tighter 2xl:tracking-normal"
        >
            Book Consultation
        </button>
    );
}
