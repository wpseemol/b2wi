'use client';

import { useRouter } from 'next/navigation';

export default function OurSkillButton({
    children,
    slug,
}: {
    children: React.ReactNode;
    slug: string;
}) {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.push(`/${slug}`);
            }}
            className="flex justify-center items-center cursor-pointer">
            {children}
        </div>
    );
}
