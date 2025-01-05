import { connectMongoDB } from '@/db/mongoose-connect';
import { User } from '@/lib/schema/mongoose/user/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password }: { email: string; password: string } =
            await request.json();

        if (!email || !password) {
            return NextResponse.json(
                {
                    message: 'Email and password are required.',
                },
                {
                    status: 400,
                }
            );
        }

        await connectMongoDB();

        const user: IUserPartial | null | undefined = await User.findOne(
            { email },
            'fullName email picture role emailVerificationStatus'
        )
            .select('+password')
            .lean<IUserPartial | null>();

        if (!user) {
            return NextResponse.json(
                { message: 'User not found.' },
                {
                    status: 404,
                }
            );
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        const userSanitize: UserSanitizeType = {
            id: user._id.toString(),
            name: user.fullName,
            email: user.email,
            image: user.picture,
            role: user.role,
            emailVerificationStatus: user.emailVerificationStatus,
        };

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid password' },
                {
                    status: 401,
                }
            );
        }

        return NextResponse.json(
            {
                message: 'Login successful',
                user: userSanitize,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                message: 'Internal server error.',
            },
            {
                status: 500,
            }
        );
    }
}

export interface UserSanitizeType {
    id: string;
    name: string;
    email: string;
    picture: string | null;
    role: 'student' | 'admin' | 'supper-admin';
    emailVerificationStatus: 'unverified' | 'pending' | 'verified';
}

export interface IUserPartial {
    _id: string;
    fullName: string;
    email: string;
    picture: string | null;
    password: string;
    role: 'student' | 'admin' | 'supper-admin';
    emailVerificationStatus: 'unverified' | 'pending' | 'verified';
}
