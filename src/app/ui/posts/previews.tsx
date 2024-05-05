'use client';

import Link from "next/link";
import { previewDateFormat } from "@/app/lib/date-formats";

function Preview({
   id,
   title,
   date,
   tags
}:
   {
      id: number,
      title: string,
      date: string,
      tags: string,
   }) {
   return (
      <Link href={`/post/${id}`} className="">
         <div id="preview" className="grid border-4 w-full h-full hover:bg-white dark:hover:bg-prev_post_gray-scroll contrast-200 dark:hover:contrast-125 border-4 rounded-sm border-custom_black hover:border-custom_gray dark:hover:border-custom_white dark:border-custom_white">
            <div id="previewDateDiv" className="grid bg-black dark:bg-custom_white w-full h-[15%] 
                sm:w-full
                md:w-full
                lg:justify-self-end lg:w-[15%]">
               <p className="border-2 border-black dark:border-custom_white
                    w-full bg-black dark:bg-custom_white text-custom_white dark:text-black text-center text-xs 
                    md:text-lg
                    ">
                  {previewDateFormat(date)}
               </p>

            </div>
            <div className="justify-self-start ml-[1%] w-[65%] h-[40%]">
               <p className="justify-self-start text-xl 
                    sm:text-xl
                    md:text-3xl">{title}</p>
            </div>
            <div className="justify-self-start w-[80%] h-[45%]">
               <p className="justify-self-start 
                    ml-[1%] w-[80%] text-xs text-truncate
                    sm:text-sm 
                    md:text-xl">no way, bro! no way", "how, Sway.", "when you say my name, put some respecc on it.</p>
            </div>
         </div>
      </Link>
   );
}

export default function PostsPreviewsWrapper({
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

   return <>{
      posts.map((post, idx) => (
         <Preview
            key={idx}
            id={post.id}
            title={post.title}
            date={post.published_at}
            tags={tags.get(post.id)!.join(', ')}
         />
      ))
   }</>
}
