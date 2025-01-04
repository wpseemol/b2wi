import { createContext } from 'react';

const LoginErrorContext = createContext<LoginErrorContextType | null>(null);

/**
 * login error context
 */
interface LoginErrorContextType {
    loginError: string | null;
    setLoginError: React.Dispatch<React.SetStateAction<string | null>>;
}

export { LoginErrorContext };
