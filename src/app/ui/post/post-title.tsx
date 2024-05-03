'use client';

import { useState, useEffect } from "react";

export default function PostTitle({ title }: { title: string | undefined }) {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })

   return (
         <h1 id="postTitle" className={`text-5xl w-full h-full md:h-fit
        md:text-4xl
        lg:text-5xl transition-opacity duration-200 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}>
            {title}
         </h1>
   )
}