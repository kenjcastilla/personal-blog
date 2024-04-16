'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../lib/data/definitions";
import { useRouter } from "next/navigation";
require('dotenv');

export default function SignOut() {
   const supabase = createClientComponentClient<Database>();
   const router = useRouter();

   async function handleSignOut() {
      await supabase.auth.signOut().then(() => {
         router.push('/sign-in');
      });
   }
   return (
      <>
         <div id="signOutFullDiv" className="w-full h-full flex flex-col items-center justify center">
            <div id="signOutContainer" className="flex flex-col items-center justify-center space-y-6 w-[80%] h-[60%]">
               <h1 id="signOutPageHeader" className="text-4xl text-center">Sign Out</h1>
               <button onClick={handleSignOut} className="text-lg md:w-[50%] md:h-[2em] md:border-2 md:rounded-lg">Sign Out</button>
            </div>
         </div>
      </>
   )
}