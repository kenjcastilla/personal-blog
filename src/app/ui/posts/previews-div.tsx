'use client';

import { useState, useEffect } from "react";
import PostsPreviewsWrapper from "./previews";
import { notFound } from "next/navigation";

export default function PreviewsDiv({ posts, tags }: {
   posts: {
      id: number;
      title: string;
      published_at: string;
   }[];
   tags: Map<number, string[]>
}
) {
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   useEffect(() => {
      handleLoad();
   })

   if (!posts) {
      notFound();
   }

   return (
      <div id="postsPreviewsDiv" className={`flex flex-col gap-y-8 content-start overflow-y-auto scroll-my-1 scroll-smooth scrollbar-previews w-[70%] h-[60%] 
            sm:h-[65%]
            md:gap-y-5 
            transition-opacity ease-in duration-300 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
         <PostsPreviewsWrapper
            posts={posts}
            tags={tags}
         />
      </div>
   )
}