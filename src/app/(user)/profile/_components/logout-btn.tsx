'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function LogoutBtn() {
    return (
        <div>
            <Button onClick={() => signOut()}>Logout {'->'}</Button>
            <br />
            <br />
            <Button>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}
