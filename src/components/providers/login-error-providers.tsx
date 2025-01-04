'use client';

import { LoginErrorContext } from '@/contexts';
import { ReactNode, useState } from 'react';

export default function LoginErrorProviders({
    children,
}: {
    children: ReactNode;
}) {
    const [loginError, setLoginError] = useState<string | null>(null);

    return (
        <>
            <LoginErrorContext.Provider value={{ loginError, setLoginError }}>
                {children}
            </LoginErrorContext.Provider>
        </>
    );
}
