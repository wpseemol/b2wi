import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        console.log(request.body);
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
