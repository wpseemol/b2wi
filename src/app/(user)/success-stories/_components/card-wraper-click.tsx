'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
export default function CardRapperClick({
    children,
    slug,
}: {
    children: ReactNode;
    slug: string;
}) {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.push(`/success-stories/${slug}`);
            }}
            className="group border border-neutral-500/80 rounded-lg">
            {children}
        </div>
    );
}
