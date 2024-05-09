import React from "react";

export default function HomeLoadingSkeleton() {
   return (
      <div id="homeFullSkeleton" className="flex flex-col items-center justify-center w-full h-full">
         <div id="homeHeadingDiv" className="flex flex-col items-center justify-center w-full h-[25%] space-y-[1em]">
            <div id="homeTitleDivSkeleton" className="flex flex-col items-center justify-center space-y-[1em] w-[75%] h-[50%] md:w-[80%] md:h-[35%] skeleton1-styles">
               <h1 id="homeTitleSkeleton" className="w-[95%] h-[82%] md:w-[98%] md:h-[70%] skeleton2-styles"></h1>
            </div>
            <div id="homeSubtitleDivSkeleton" className="flex flex-col items-center justify-center space-y-[1em] w-[30%] md:w-[20%] h-[20%] mt-[1em] skeleton1-styles">
               <h2 id="homeSubtitleSkeleton" className="w-[92%] h-[70%] md:w-[95%] md:h-[55%] skeleton2-styles"></h2>
            </div>
         </div>
         <div id="homeDividerSkeleton" className="flex flex-col w-full h-[6em]"></div>
         <div id="homePreviewsDivSkeleton" className="grid w-[50%] h-auto skeleton1-styles">
            <div id="previewDateDiv" className="w-full h-[1.5em] md:h-[2em] lg:justify-self-end lg:w-[15%] mb-[0.5em] md:mb-0 skeleton2-styles">
            </div>
            <div id="previewTitleDiv" className="justify-self-start ml-[0.5em] w-[65%] h-[3em] skeleton2-styles">
            </div>
            <div id="previewTagsDiv" className="justify-self-start self-end ml-[0.5em] mt-[0.5em] mb-[0.5em] w-[80%] h-[1.5em] skeleton2-styles">
            </div>
         </div>
      </div>
   )
}