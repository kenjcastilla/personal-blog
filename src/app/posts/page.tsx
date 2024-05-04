import { Suspense } from "react";
import PostsFull from "../ui/posts/posts-full";

export default function Page({
  searchParams,
}: {
  searchParams?: {
     query?: string;
  };
}) {
  const query = searchParams?.query?.trim();
  return (
    <Suspense>
      <PostsFull query={query || ''}/>
    </Suspense>
  )
}