import EmailTemplate from '@/components/email-template';
import { connectMongoDB } from '@/db/mongoose-connect';
import { sendEmails } from '@/lib/email/emails';
import { User } from '@/lib/schema/mongoose/user/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { fullName, email } = await request.json();

        const otp = generateRandomCode();

        // connect mongodb
        await connectMongoDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            if (existingUser.emailVerificationStatus === 'verified') {
                return NextResponse.json(
                    {
                        message: 'User already exists Please login.',
                    },
                    { status: 400 }
                );
            }
            const now = new Date();
            now.setMinutes(now.getMinutes() + 60); // Set expiry time to 60 minutes from now

            existingUser.otp = otp; // Set the new OTP
            existingUser.expireTime = now; // Update the expiry time
            await existingUser.save(); // Save the updated user document

            const mailSend = await sendEmails({
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'Confirm your B2WI account',
                react: EmailTemplate({ message: `verification code: ${otp}` }),
            });

            return NextResponse.json(
                {
                    message: 'Please check your email to verified',
                    username: existingUser.username,
                    mailSend: JSON.stringify(mailSend),
                },
                { status: 400 }
            );
        }

        const newUser = await User.create({ fullName, email, otp });

        const mailSend = await sendEmails({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Confirm your B2WI account',
            react: EmailTemplate({ message: `verification code: ${otp}` }),
        });

        return NextResponse.json(
            {
                massage: 'success full created',
                username: newUser.username,
                mailSend: JSON.stringify(mailSend),
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: 'internal server error.',
            },
            {
                status: 500,
            }
        );
    }
}

function generateRandomCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    return code;
}
