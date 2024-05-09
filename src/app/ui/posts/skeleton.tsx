import React from "react";

export default function PostsLoadingSkeleton() {
   return (
      <div id="postsFullSkeleton" className="flex flex-col items-center w-full h-full">
        <div id="postsHeadingDivSkeleton" className="w-[40%] md:w-[25%] h-[10%] mt-[3em] skeleton2-styles">
        </div>
        <div id="searchAndPreviewsDivSkeleton" className="flex flex-col items-center justify-center space-y-[1.5em] w-[60%] h-[45%]">
          <div id="searchDivSkeleton" className="flex items-center justify-center w-[95%] md:w-[75%] h-[12%] rounded-lg bg-skeleton1_light dark:bg-skeleton1_dark animate-pulse">
            <div id="searchDivInnerSkeleton" className="w-[90%] md:w-[98%] h-[65%] rounded-lg bg-skeleton2_light dark:bg-skeleton2_dark animate-pulse"></div>
          </div>
          <div id="postsPreviewsDivSkeleton" className="grid w-[70%] h-auto skeleton1-styles">
            <div id="previewDateDiv" className="w-full h-[1.5em] md:h-[2em] lg:justify-self-end lg:w-[15%] mb-[0.5em] md:mb-0 skeleton2-styles">
            </div>
            <div id="previewTitleDiv" className="justify-self-start ml-[0.5em] w-[65%] h-[3em] skeleton2-styles">
            </div>
            <div id="previewTagsDiv" className="justify-self-start self-end ml-[0.5em] mt-[0.5em] mb-[0.5em] w-[80%] h-[1.5em] skeleton2-styles">
            </div>
          </div>
        </div>
      </div>
    );
}