'use client';

import { useState, useEffect } from "react";
import PostsPreviewsWrapper from "./previews";

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

   return (
         <PostsPreviewsWrapper
            posts={posts}
            tags={tags}
         />
   )
}