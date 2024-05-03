import { getPostTitle } from "@/app/lib/post/functions";

export default async function PostTitle({ id }: { id: string }) {
   const title = await getPostTitle(id);

   return (
         <h1 id="postTitle" className="text-5xl w-full h-full md:h-fit
        md:text-4xl
        lg:text-5xl">
            {title}
         </h1>
   )
}