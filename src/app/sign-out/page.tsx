import { Suspense } from "react";
import SignOutButton from "../ui/sign-out/sign-out-button";

export default function Page() {
   return (
      <>
         <div id="signOutFullDiv" className="w-full h-full flex flex-col items-center justify-center">
            <div id="signOutContainer" className="flex flex-col items-center space-y-6 w-[80%] h-[60%] mt-[12em]">
               <h1 id="signOutPageHeader" className="text-4xl text-center">Sign Out</h1>
               <Suspense>
                  <SignOutButton />
               </Suspense>
            </div>
         </div>
      </>
   )
}