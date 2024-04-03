import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, NextRequest } from 'next/server';
import type { Database } from '@/app/lib/data/definitions';

export async function middleware(req: NextRequest) {
    console.log('In middleware()...');
    const res = NextResponse.next();

    // Create a Supabase client configured to use cookies
    const supabase = createMiddlewareClient<Database>({ req, res });

    const { data: { user } } = await supabase.auth.getUser();

    if (user?.role !== 'authenticated') {
        console.log('No authenticated user detected w/ middleware. Redirecting to Login...');
        const loginUrl = new URL('/login', req.url);
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
