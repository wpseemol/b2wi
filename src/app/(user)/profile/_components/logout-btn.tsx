'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutBtn() {
    const route = useRouter();

    async function handelLogout() {
        signOut({
            redirect: false,
        }).then(() => {
            route.refresh();
        });
    }

    return (
        <div>
            <Button onClick={handelLogout}>Logout </Button>
        </div>
    );
}
