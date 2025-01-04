import { LoginErrorContext } from '@/contexts';
import { useContext } from 'react';

/**
 *  use login error is LoginErrorContext
 *  return
 *  `loginError, setLoginError`
 *
 */
export function useLoginError() {
    const context = useContext(LoginErrorContext);
    if (!context) {
        throw new Error(
            'useLoginError must be used within a LoginErrorProvider.'
        );
    }

    return context;
}
