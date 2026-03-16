import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const { name, email, message } = body;

    // Simple validation
    if (!name || !email || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!validateEmail(email)) {
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Here you would typically store the submission in a database.
    // For demonstration, we'll just return a success response.
    return NextResponse.json({ success: true, message: 'Form submitted successfully!' }, { status: 200 });
}

function validateEmail(email: string) {
    const re = /^[\w-\.+]*[\w-\.+]@[\w-]+(\.[a-zA-Z]{2,})+$/;
    return re.test(String(email).toLowerCase());
}