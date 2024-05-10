import { Suspense } from "react";
import PostsTitleHeading from "../ui/posts/posts-title-heading";
import Search from "../ui/posts/search";
import PostsFull from "../ui/posts/posts-full";
import { Metadata } from "next";
import LoadingSpinner from "../ui/loading-spinner";

export const metadata: Metadata = {
  title: 'Posts',
}

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query?.trim();
  return (
    <div id="postsFull" className="grid justify-items-center items-center w-full h-full">
      <div className="flex flex-col items-center justify-start space-y-4 w-full h-full overflow-y-auto">
        <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[20%]
            sm:h-[35%]
            md:h-[15%]">
          <div id="homeTitleHeaderDiv" className="flex-1 content-center w-full h-auto">
            <PostsTitleHeading />
          </div>
        </div>
        <Search />
        <div id="postsPreviewsDiv" className={`flex flex-col gap-y-8 content-start overflow-y-auto scroll-my-1 scroll-smooth scrollbar-previews w-[70%] h-[60%] 
            sm:h-[65%]
            md:gap-y-5`}>
          <Suspense fallback={<LoadingSpinner />}>
            <PostsFull query={query || ''} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}