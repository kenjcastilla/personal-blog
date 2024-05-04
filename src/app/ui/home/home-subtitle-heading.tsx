'use client';

import { useState, useEffect } from "react";

export default function HomeSubtitleHeading() {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })

   return (
         <h2 id="homeSubtitleHeading" className={`text-center text-base w-full
            md:text-xl transition-opacity ease-in duration-300 ${loaded ? "opacity-100" : "opacity-0"}
            `}>
            A Blog by KenJC
         </h2>
   )

}