'use client';

import { createClient } from "@/app/auth/client/browser-client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
   const supabase = createClient();
   const router = useRouter();

   async function handleSignOut() {
      await supabase.auth.signOut().then(() => {
         router.push('/sign-in');
      });
   }

   return (
      <button onClick={handleSignOut} className="text-md text-custom_white dark:text-custom_white w-[40%] h-[2em] bg-custom_gray-dark dark:bg-custom_black border-2 rounded-lg md:text-lg md:w-[50%]">Sign Out</button>
   )
}