'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AllScholarshipUpdatesBtn({
    children,
}: {
    children: React.ReactNode;
}) {
    const route = useRouter();

    return (
        <Button
            onClick={() => route.push('/scholarships')}
            size="lg"
            variant="outline"
            className="border-primaryColor h-12 hover:bg-[#005694] hover:text-neutral-100/80">
            {children}
        </Button>
    );
}
