import { Suspense } from "react";
import PostsFull from "../ui/posts/posts-full";
import { Metadata } from "next";

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
    <Suspense>
      <PostsFull query={query || ''}/>
    </Suspense>
  )
}