import 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            image?: string;
            role: 'student' | 'admin' | 'supper-admin';
        };
    }

    interface User {
        id: string;
        name: string;
        email: string;
        role: 'student' | 'admin' | 'supper-admin';
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role: 'student' | 'admin' | 'supper-admin';
    }
}
