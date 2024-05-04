'use client';

import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

export default function PostContentTags(
   { tags, content }:
      {
         tags: (string | null | undefined)[] | undefined,
         content: string | null | undefined
      }
) {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })
   
   return (
      <>
         <div id="postContent" className={`w-full h-auto transition-opacity duration-500 delay-200 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}>
            <br />
            {parse(content!)}
            <p id="postTags" className="text-center mt-[6em] w-[100%] h-fit">
               Tags: {tags!.join(', ')}
            </p>
         </div>
         <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
      </>
   )
}