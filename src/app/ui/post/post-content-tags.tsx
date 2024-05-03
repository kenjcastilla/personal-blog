import parse from 'html-react-parser';
import { getPostContent, getPostTags } from "@/app/lib/post/functions";

export default async function PostContentTags({ id }: { id: string }) {
   const content = await getPostContent(id);
   const tags = await getPostTags(id);

   return (
      <>
         <div id="postContent" className="w-full h-auto">
            <br />
            {parse(content!)}
            <p id="postTags" className="text-center mt-[6em] w-[100%] h-fit">
               Tags: {tags?.join(', ')}
            </p>
         </div>
         <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
      </>
   )
}