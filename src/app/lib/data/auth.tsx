import { supabase } from "./client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublishAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  async function handleSignIn() {
    supabase.auth.signInWithPassword({
      email,
      password
    })
    router.refresh();
  }

  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  )
}
