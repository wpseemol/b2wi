'use client';

import { useLoginError } from '@/hooks/contexts-hooks/login-error-hook';
import { useEffect } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

export default function AlertMessage() {
    const { loginError, setLoginError } = useLoginError();

    useEffect(() => {
        if (loginError) {
            setTimeout(() => {
                setLoginError(null);
            }, 5000);
        }
    }, [loginError, setLoginError]);

    return (
        <>
            <div
                style={{
                    height: loginError ? 'auto' : 0,
                    paddingBlock: loginError ? 16 : 0,
                }}
                className="relative flex items-end gap-2 px-4 mb-8 rounded-lg bg-red-300 text-red-500 text-sm font-semibold bg-opacity-10 transition-all overflow-hidden"
                role="alert"
            >
                <FiAlertTriangle className="!stroke-yellow-600 w-5 h-5" />
                {loginError}
            </div>
        </>
    );
}
