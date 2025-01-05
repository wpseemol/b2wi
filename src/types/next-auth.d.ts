import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image: string | null;
            role: 'student' | 'admin' | 'supper-admin';
        };
    }

    interface User {
        id: string;
        name: string;
        email: string;
        image: string | null;
        role: 'student' | 'admin' | 'supper-admin';
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        name: string;
        email: string;
        image: string | null;
        role: 'student' | 'admin' | 'supper-admin';
    }
}
