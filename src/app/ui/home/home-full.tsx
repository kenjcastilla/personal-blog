import { getHomeData } from "@/app/lib/home/functions";
import HomeTitleHeading from "./home-title-heading";
import HomeSubtitleHeading from "./home-subtitle-heading";
import PreviewsDiv from "./previews-div";

export default async function HomeFull() {
   const [posts, tags] = await getHomeData();
   const showPreview = Array.isArray(posts) ? false : true;

   return (
      <div id="homeFull" className="flex flex-col items-center justify-center w-full h-full">
         <div id="homeTitleDiv" className="flex flex-col justify-end w-[80%] h-[45%]
            sm:h-[40%]">
            <div id="homeTitleHeaderDiv" className="flex justify-center w-full h-auto">
               <HomeTitleHeading />
            </div>
            <div id="homeSubtitleDiv" className="flex w-full h-fit mt-[1em]">
               <HomeSubtitleHeading />
            </div>
         </div>
         {showPreview
            ?
            (<PreviewsDiv
               post={posts as {
                  id: number;
                  title: string;
                  published_at: string;
               }}
               tags={tags as string[]} />)
            :
            (<div id="homePreviewsDiv" className={`flex flex-col gap-y-8 content-center justify-center w-[60%] h-[40%]`}>
            </div>)
         }
      </div>
   )
}
