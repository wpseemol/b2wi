import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { username, otp } = await request.json();

    try {
        return NextResponse.json(
            {
                message: 'Account verification successful.',
                username,
                otp,
            },
            {
                status: 201,
            }
        );
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
