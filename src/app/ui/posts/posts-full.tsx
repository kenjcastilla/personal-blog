import { notFound } from "next/navigation";
import { fetchPostsData } from "@/app/lib/posts/functions";
import Search from "./search";
import PreviewsDiv from "./previews-div";
import HomeTitleHeading from "./home-title-heading";

export default async function PostsFull({ query }: { query: string }) {
   const [posts, tags] = await fetchPostsData(query);

   if (!posts) {
      notFound();
   }

   return (
      <div id="postsFull" className="grid justify-items-center items-center w-full h-full">
         <div className="flex flex-col items-center justify-start space-y-4 w-full h-full overflow-y-auto">
            <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[20%]
            sm:h-[35%]
            md:h-[15%]">
               <div id="homeTitleHeaderDiv" className="flex-1 content-center w-full h-auto">
                 <HomeTitleHeading />
               </div>
            </div>
            <Search />
            <PreviewsDiv
               posts={posts as { id: number; title: string; published_at: string; }[]}
               tags={tags as Map<number, string[]>}
            />
         </div>
      </div>
   );
}