'use client';

import { useState, useEffect } from "react";

export default function HomeTitleHeading() {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })

   return (
      <h1 id="homeTitleHeader" className={`flex-1 w-full h-fit bg-black dark:bg-custom_white text-center text-4xl text-custom_white dark:text-black rounded-sm
            sm:text-4xl
            md:text-6xl transition-opacity ease-in duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
         Unsolicited Verbosity
      </h1>
   )
}