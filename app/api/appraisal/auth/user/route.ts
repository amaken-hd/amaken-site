import { NextRequest, NextResponse } from 'next/server';
import { ERPNEXT_URL } from '@/lib/api';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const cookieStore = await cookies();
        const sid = cookieStore.get('sid')?.value;

        if (!sid) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const response = await fetch(`${ERPNEXT_URL}/api/method/frappe.auth.get_logged_user`, {
            method: 'GET',
            headers: {
                'Cookie': `sid=${sid}`,
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            return NextResponse.json({ user: null }, { status: 200 });
        }

        const data = await response.json();

        return NextResponse.json({
            user: {
                email: data.message,
                name: data.message, // Fallback to email as name if only email is returned
            }
        });

    } catch (error: any) {
        console.error('Session check error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
