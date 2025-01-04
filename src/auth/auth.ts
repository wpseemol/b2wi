import client from '@/db/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(client),
    session: {
        strategy: 'jwt',
    },

    pages: {
        signIn: '/login',
        error: '/login/error',
    },

    trustHost: true,

    providers: [
        Credentials({
            name: 'Credentials',
            type: 'credentials',
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_BASS_URL}api/v1/user/login`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    }
                );

                if (response.ok) {
                    const loginUser = await response.json();
                    return loginUser?.user;
                }

                switch (response?.status) {
                    case 404:
                        throw new userNotFound();

                    case 401:
                        throw new passwordNotMatch();

                    default:
                        throw new somethingWrong();
                }

                return null;
            },
        }),
    ],

    callbacks: {
        async signIn({ user, account }) {
            if (user.role) {
                account.role = user.role;
            }

            return true;
        },

        async session({ session, token }) {
            if (token.role) {
                session.user.role = token.role;
            }

            if (token.sub) {
                session.user.id = token.sub;
            }

            return session;
        },

        // token, user, session, trigger
        async jwt({ token, user, session }) {
            if (user?.role) {
                token.role = user.role;
            }
            if (session?.role) {
                token.role = session.role;
            }

            return token;
        },
    },
});

class passwordNotMatch extends CredentialsSignin {
    message = 'Password is not match';
    code = 'passwordNotPatch';
    name = 'password not match';
    stack?: string | undefined = 'password not patch';
    cause?: (Record<string, unknown> & { err?: Error }) | undefined;
}
class userNotFound extends CredentialsSignin {
    message = 'User account is not found.';
    code: string = 'notFound';
    name: string = 'User account is not found.';
    stack?: string | undefined = 'User account is not found.';
}
class somethingWrong extends CredentialsSignin {
    message = 'Some thing is wrong.';
    code: string = 'otherError';
    name: string = 'Some thing is wrong.';
    stack?: string | undefined = 'Some thing is wrong.';
}
