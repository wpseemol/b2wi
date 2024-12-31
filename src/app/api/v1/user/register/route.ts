import { connectMongoDB } from '@/db/mongoose-connect';
import { User } from '@/lib/schema/mongoose/user/user';
import { UserVerificationToken } from '@/lib/schema/mongoose/user/verification-token';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { fullName, email } = await request.json();

        const otp = generateRandomCode();

        // connect mongodb
        await connectMongoDB();

        // create the user
        const newUser = await User.create({ email });

        const userProfile = new UserProfile({
            userId: newUser._id,
            fullName,
        });

        await userProfile.save();

        const userVerificationToken = new UserVerificationToken({
            userId: newUser._id,
            otp,
        });

        await userVerificationToken.save();

        return NextResponse.json(
            {
                massage: 'success full created',
                userProfile: JSON.stringify(userProfile),
                newUser: JSON.stringify(newUser),
                userVerificationToken: JSON.stringify(userVerificationToken),
                otp: otp,
            },
            {
                statue: 201,
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: 'internal server error.',
            },
            {
                statue: 500,
            }
        );
    }
}

function generateRandomCode(): string {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
}
