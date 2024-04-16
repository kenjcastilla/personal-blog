'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Database } from '../lib/data/definitions';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [needClear, setNeedClear] = useState(false);
  const [failMessage, setFailMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl: string = searchParams.get('from')?.toString()!;
  const supabase = createClientComponentClient<Database>();

  async function handleSignIn() {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
      .then(({ data, error }) => {
        if (data.user?.role === 'authenticated') {
          console.log("USER AUTHENTICATED. SESSION INITIATED...");
          router.push(redirectUrl);
        }
        else {
          setNeedClear(true);
          setTimeout(() => {
            console.log("USER NOT AUTHENTICATED. SESSION NOT INITIATED.");
          }, 2000);
        }
        router.push(redirectUrl);
      })

  }

  useEffect(() => {
    if (needClear) {
      setEmail('');
      setPassword('');
      console.clear();
      setFailMessage("Authentication failed")
    }
    setNeedClear(false);
  }, [email, password, needClear]);

  return (
    <>
      <div id="loginPageContainerFull" className="flex flex-col items-center w-full h-full">
        <div id="loginContainer" className="flex flex-col justify-center w-[80%] h-[60%]">
          <input
            className="h-[2em] px-1 text-white dark:text-black"
            type="email"
            name="email"
            placeholder="email@email.xyz"
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
          <div className="w-full h-[1em]"></div>
          <input
            className="h-[2em] px-1 text-white dark:text-black"
            type="password"
            name="password"
            placeholder="passw0rd"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="w-full h-[1em]"></div>
          <p className="text-lg text-rose-500">{failMessage}</p>
          <div className="w-full h-[3em]"></div>
          <button onClick={handleSignIn} className="self-center text-md md:w-[20%] md:h-[2.5em] md:border-2 md:rounded-lg">Sign In</button>
        </div>
      </div>
    </>
  );
}
