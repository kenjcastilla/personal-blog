import React from "react";
import LoadingSpinner from "../loading-spinner";

export default function PostsLoadingSkeleton() {
  return (
    <div id="postsPreviewsDivSkeleton" className="flex flex-col w-full h-full">
      <LoadingSpinner />
    </div>
  )
}