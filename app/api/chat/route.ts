import { NextResponse } from 'next/server';

export async function POST(request) {
    const { query } = await request.json();

    try {
        const response = await fetch(`https://YOUR_GROQ_API_ENDPOINT`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any required headers here
            },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.error();
    }
}
