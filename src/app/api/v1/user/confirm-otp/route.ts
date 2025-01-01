import { connectMongoDB } from '@/db/mongoose-connect';
import { User } from '@/lib/schema/mongoose/user/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { username, otp } = await request.json();

        await connectMongoDB();

        const user = await User.findOne({
            username,
        });

        if (!user) {
            return NextResponse.json(
                {
                    message: 'Your account is not found.',
                },
                {
                    status: 404,
                }
            );
        }

        const now = new Date();

        const diff = now - user.expireTime;
        const minutes = Math.floor(diff / 1000 / 60);

        console.log('check expire time', minutes);
        console.log('check expire time');

        if (now > user.expireTime) {
            return NextResponse.json(
                { message: 'Invalid request. OTP has expired.' },
                { status: 400 }
            );
        }

        if (otp === user.otp) {
            user.emailVerificationStatus = 'verified';

            await user.save();

            return NextResponse.json(
                {
                    message: 'Account verification successful.',
                },
                {
                    status: 200,
                }
            );
        }
    } catch (error) {
        console.error(error);

        NextResponse.json(
            {
                message: 'internal server error.',
            },
            {
                status: 500,
            }
        );
    }
}
