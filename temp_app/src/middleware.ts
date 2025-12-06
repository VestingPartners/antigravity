import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check for auth cookie
    const authCookie = request.cookies.get('auth_token');
    const { pathname } = request.nextUrl;

    // Protect dashboard routes
    if (pathname.startsWith('/dashboard')) {
        if (!authCookie) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirect to dashboard if logged in and trying to access login
    if (pathname === '/login') {
        if (authCookie) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
