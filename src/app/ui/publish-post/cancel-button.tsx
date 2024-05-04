'use client';

import { useRouter } from "next/navigation";

export default function CancelButton() {
   const router = useRouter();
   return <button id="cancelPublishPostButton" className="text-md md:w-[20%] md:h-[2.5em] md:border-2 border-custom_black dark:border-custom_white md:rounded-lg" onClick={() => {
       router.push('/sign-out');
   }} >Cancel</button>
} 