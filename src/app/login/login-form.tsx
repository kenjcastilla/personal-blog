'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { User } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../lib/data/definitions';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient<Database>();

  async function handleSignIn() {
    console.log('In handleSignIn()');
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    await supabase.auth.getUser().then(({ data }) => {
      if (data.user?.id === process.env.NEXT_PUBLIC_SUPABASE_AUTHENTICATED_ID) {
        const redirectUrl: string = searchParams.get('from')?.toString()!;
        console.log("SESSION INITIATED");
        router.push(redirectUrl);
      }
      else {
        console.log("SESSION NOT INITIATED");
        router.refresh();
      }
    });
    return;
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    // <main id="mainView" className="w-full h-full">
    <>
      <div id="loginPageContainerFull" className="flex flex-col items-center w-full h-full">
        <div id="loginContainer" className="flex flex-col justify-center w-[80%] h-[60%]">
          <input
            className="h-[2em] text-white dark:text-black"
            type="email"
            name="email"
            placeholder="email@email.xyz"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
          <div className="w-full h-[1em]"></div>
          <input
            className="h-[2em] text-white dark:text-black"
            type="password"
            name="password"
            placeholder="passw0rd"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="w-full h-[1em]"></div>
          <button onClick={handleSignIn}>Sign in</button>
          <div className="w-full h-[3em]"></div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      </div>
    </>
    // </main >
  );
}
