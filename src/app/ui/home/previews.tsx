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
   }
) {
   const date = previewDateFormat(published_at);

   return (
      <Link href={`/post/${id}`} className="">
         <div id="preview" className="grid w-full h-full hover:bg-white dark:hover:bg-prev_post_gray-scroll contrast-200 dark:hover:contrast-125 border-4 rounded-sm border-custom_black hover:border-custom_gray dark:hover:border-custom_white dark:border-custom_white">
            <div id="previewDateDiv" className="grid bg-black dark:bg-custom_white w-full h-[15%] 
                sm:w-full
                md:w-full
                lg:justify-self-end lg:w-[15%]">
               <p id="previewDateText" className="border-2 border-black dark:border-custom_white
                    w-full bg-black dark:bg-custom_white text-custom_white dark:text-black text-center text-xs 
                    md:text-lg
                    ">
                  {date}
               </p>

            </div>
            <div id="previewTitleDiv" className="justify-self-start ml-[1%] w-[65%] h-[40%]">
               <p id="previewTitleText" className="justify-self-start text-xl text-truncate
                    sm:text-xl
                    md:text-3xl">{title}</p>
            </div>
            <div id="previewTagsDiv" className="justify-self-start w-[80%] h-[45%]">
               <p id="previewTagsText" className="justify-self-start 
                    ml-[1%] w-[80%] text-xs text-ellipsis
                    sm:text-sm 
                    md:text-xl">{tags}</p>
            </div>
         </div>
      </Link>
   );
}

export default function HomePreviewsWrapper({
   post,
   tags
}: {
   post: {
      id: number;
      title: string;
      published_at: string;
   },
   tags: string[];
}) {

   if (tags) {
      return <>
         <Preview
            key={post.id}
            id={post.id}
            title={post.title}
            published_at={post.published_at}
            tags={tags!.join(', ')}
         />
      </>
   }
   else {
      return <>
         <Preview
            key={post.id}
            id={post.id}
            title={post.title}
            published_at={post.published_at}
            tags=""
         />
      </>
   }
}

