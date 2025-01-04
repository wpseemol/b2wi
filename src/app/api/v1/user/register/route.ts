import EmailTemplate from '@/components/email-template';
import { connectMongoDB } from '@/db/mongoose-connect';
import { sendEmails } from '@/lib/email/emails';
import { User } from '@/lib/schema/mongoose/user/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { fullName, email, password } = await request.json();

        const hashPassword = await bcryptjs.hashSync(password, 10);

        const otp = generateRandomCode();

        // connect mongodb
        await connectMongoDB();

        // Validate required fields
        if (!fullName || !email || !password) {
            return NextResponse.json(
                {
                    message: 'fullname, email, and password are required.',
                },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            if (existingUser.emailVerificationStatus === 'verified') {
                return NextResponse.json(
                    {
                        message: 'User already exists Please login.',
                        code: 'already-exists',
                    },
                    { status: 409 }
                );
            }
            const now = new Date();
            now.setMinutes(now.getMinutes() + 60); // Set expiry time to 60 minutes from now

            existingUser.fullName = fullName; // Set the new OTP
            existingUser.password = hashPassword; // Set the new OTP
            existingUser.otp = otp; // Set the new OTP
            existingUser.expireTime = now; // Update the expiry time
            await existingUser.save(); // Save the updated user document

            const mailSend = await sendEmails({
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'Confirm your B2WI account',
                react: EmailTemplate({
                    otp,
                    brandName: 'B2WI',
                    confirmLink: `${process.env.NEXT_PUBLIC_BASS_URL}confirm-account?username=${existingUser.username}&token=${otp}`,
                }),
            });

            return NextResponse.json(
                {
                    message: 'Please check your email to verified',
                    username: existingUser.username,
                    mailSend: JSON.stringify(mailSend),
                },
                { status: 200 }
            );
        }

        const newUser = await User.create({
            fullName,
            email,
            otp,
            password: hashPassword,
        });

        const mailSend = await sendEmails({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Confirm your B2WI account',
            react: EmailTemplate({
                otp,
                brandName: 'B2WI',
                confirmLink: `${process.env.NEXT_PUBLIC_BASS_URL}confirm-account?username=${newUser.username}&token=${otp}`,
            }),
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
