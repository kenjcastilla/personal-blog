import React from "react";
import LoadingSpinner from "../loading-spinner";

export default function HomeLoadingSkeleton() {
   return (
      <div id="homePreviewsSkeleton" className="flex flex-col items-center justify-center w-full h-full">
         <LoadingSpinner />
      </div>
   )
}