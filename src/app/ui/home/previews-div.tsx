'use client';

import { useState, useEffect } from "react";
import HomePreviewsWrapper from "./previews";

export default function PreviewsDiv({ post, tags }: {
   post: {
      id: number;
      title: string;
      published_at: string;
   };
   tags: string[]
}
) {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   }
   )

   return (
      <div id="homePreviewsDiv" className={`flex flex-col gap-y-8 content-center justify-center w-[60%] h-[65%]
            md:gap-y-5 
            transition-opacity ease-in duration-300 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
         <HomePreviewsWrapper
            post={post}
            tags={tags}
         />
      </div>
   )
}