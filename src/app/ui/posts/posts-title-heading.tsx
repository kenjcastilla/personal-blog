'use client';

import { useState, useEffect } from "react";

export default function PostsTitleHeading() {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })

   return (
      <h1 id="postsTitleHeading" className={`flex-1 w-full h-fit text-center text-3xl rounded-sm
            sm:text-3xl
            md:text-5xl
            transition-opacity ease-in duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}>
         Posts
      </h1>
   )
}