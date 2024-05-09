import { getHomeData } from "@/app/lib/home/functions";
import HomeTitleHeading from "./home-title-heading";
import HomeSubtitleHeading from "./home-subtitle-heading";
import PreviewsDiv from "./previews-div";

export default async function HomeToLoad() {
   const [posts, tags] = await getHomeData();

   return (
      <div id="homeFull" className="flex flex-col items-center justify-center w-full h-full">
         <div id="homeTitleDiv" className="flex flex-col justify-center md:justify-end w-[80%] h-[45%]
            sm:h-[40%]">
            <div id="homeTitleHeaderDiv" className="flex justify-center w-full h-auto">
               <HomeTitleHeading />
            </div>
            <div id="homeSubtitleDiv" className="flex w-full h-fit mt-[1em]">
               <HomeSubtitleHeading />
            </div>
         </div>

         <PreviewsDiv
            posts={posts as {
               id: number;
               title: string;
               published_at: string;
            }[]}
            tags={tags as Map<number, string[]>} />
      </div>
   )
}
