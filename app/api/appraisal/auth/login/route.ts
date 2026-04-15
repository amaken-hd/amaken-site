import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL, handleResponse } from '@/lib/api';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { usr, pwd } = body;

        const response = await fetch(`${ERPNEXT_URL}/api/method/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ usr, pwd }),
        });

        const data = await handleResponse(response);

        const setCookieHeader = response.headers.get('set-cookie');
        const res = NextResponse.json({
            message: 'Logged in successfully',
            user: (data as any).full_name || (data as any).message || 'User'
        });

        if (setCookieHeader) {
            const sidMatch = setCookieHeader.match(/sid=([^;]+)/);
            if (sidMatch) {
                const sid = sidMatch[1];
                (await cookies()).set('sid', sid, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    path: '/',
                    sameSite: 'lax'
                });
            }
        }

        return res;
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: error.message || 'Internal server error' },
            { status: error.status || 500 }
        );
    }
}
