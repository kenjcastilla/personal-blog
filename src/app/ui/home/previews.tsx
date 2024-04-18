'use client';

import { previewDateFormat } from "@/app/lib/date-formats";
import Link from "next/link";

function Preview({
   id,
   title,
   published_at,
   tags
}:
   {
      id: number,
      title: string,
      published_at: string,
      tags: string,
   }) {
   const date = previewDateFormat(published_at);
   return (
      <Link href={`/post/${id}`} className="">
         <div id="preview" className="grid border-4 w-full h-full">
            <div className="grid bg-white w-full h-[15%] 
                sm:w-full
                md:w-full
                lg:justify-self-end lg:w-[15%]">
               <p className="border-2 
                    w-full bg-white text-black text-center text-xs 
                    md:text-lg
                    ">
                  {date}
               </p>

            </div>
            <div className="justify-self-start ml-[1%] w-[65%] h-[40%]">
               <p className="justify-self-start text-xl 
                    sm:text-xl
                    md:text-3xl">{title}</p>
            </div>
            <div className="justify-self-start w-[80%] h-[45%]">
               <p className="justify-self-start 
                    ml-[1%] w-[80%] text-xs
                    sm:text-sm 
                    md:text-xl">{tags}</p>
            </div>
         </div>
      </Link>
   );
}

export default function HomePreviewsWrapper({
   posts,
   tags
}: {
   posts: {
      id: number;
      title: string;
      published_at: string;
   }[],
   tags: Map<number, string[]>;
}) {

   if (tags) {
      console.log(posts);
      console.log(tags);
   return <>{
      posts.map((post, idx) => (
         <Preview
            key={idx}
            id={post.id}
            title={post.title}
            published_at={post.published_at}
            tags={tags.get(post.id)!.join(', ')}
         />
      ))
   }
   </>
   }
   else {
      return <>{
         posts.map((post, idx) => (
            <Preview
               key={idx}
               id={post.id}
               title={post.title}
               published_at={post.published_at}
               tags=""
            />
         ))
      }
      </>
   }
}
