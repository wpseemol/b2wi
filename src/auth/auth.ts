import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },

    pages: {
        signIn: '/login',
        error: '/login/error',
    },

    providers: [
        Credentials({
            credentials: {
                username: { label: 'email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize({ request }) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASS_URL}api/v1/user/login`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: request.email,
                            password: request.password,
                        }),
                    }
                );
                if (!response.ok) return null;
                return (await response.json()) ?? null;
            },
        }),
    ],
});
