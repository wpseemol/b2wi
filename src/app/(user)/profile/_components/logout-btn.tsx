'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutBtn() {
    const route = useRouter();

    return (
        <div>
            <Button
                onClick={() =>
                    signOut({
                        redirect: false,
                    })
                }
            >
                Logout {'->'}
            </Button>
            <br />
            <br />
            {/* <Button>
                <Link href="/login">Login</Link>
            </Button> */}
            <br />
            <br />
            <Button onClick={() => route.refresh()}>refresh</Button>
        </div>
    );
}
