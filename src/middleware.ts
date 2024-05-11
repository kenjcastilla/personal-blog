import { createClient } from './app/auth/client/server-client';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    console.log('In middleware()...');
    const res = NextResponse.next();

    // Create a Supabase middleware client
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user?.role !== 'authenticated') {
        console.log('No authenticated user detected w/ middleware. Redirecting to Login...');
        const loginUrl = new URL('/sign-in', req.url);
        loginUrl.searchParams.set('from', req.nextUrl.pathname);
        const response = NextResponse.redirect(new URL(loginUrl));
        return response;
    }

    console.log('User detected. Proceeding to requested page...');
    return res;
}

// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: ['/publish-post'],
}
