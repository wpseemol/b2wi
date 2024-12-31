import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        return NextResponse.json(
            {
                massage: 'success full created',
                body: JSON.stringify(body),
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
