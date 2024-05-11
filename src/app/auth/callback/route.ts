// // Code Exchange Route for Supabase SERVER Client uses


import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'

import { createClient } from '@/app/auth/client/server-client'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'
  
  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')
  
  if (token_hash && type) {
    const supabase = createClient()
    
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      redirectTo.searchParams.delete('next')
      return NextResponse.redirect(redirectTo)
    }
  }
  
  // return the user to an error page with some instructions
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}

// import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import type { Database } from '@/app/lib/data/definitions';

// export async function GET(request: NextRequest) {
//      const requestUrl = new URL(request.url);
//      const code = requestUrl.searchParams.get('code');

//      if (code) {
//        try {
//          const cookieStore = cookies();
//          const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });
//          await supabase.auth.exchangeCodeForSession(code);
//        }
//        catch (error) {
//          return Promise.resolve();
//        }
//      }

//      // URL to redirect to after sign in process completes
//      return NextResponse.redirect(requestUrl.origin);
// }