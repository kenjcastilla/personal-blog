'use client';

import { useState, useEffect } from "react";
import { postDateFormat } from "@/app/lib/date-formats";

export default function PostSubtitle({ dates }: {
   dates: {
      published_at: string;
      write_date: string | null;
   } | null
}) {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })


   return (
      <h2 id="postSubtitle" className={`w-full h-fit text-lg
                    md:text-sm md:text-end
                    lg:text-xl transition-opacity duration-200 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}>
         Published: {postDateFormat(dates!.published_at || 'N/A')}<br />Written: {dates!.write_date || 'N/A'}
      </h2>
   )
}