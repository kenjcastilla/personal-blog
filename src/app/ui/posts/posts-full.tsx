import { notFound } from "next/navigation";
import { fetchPostsData } from "@/app/lib/posts/functions";
import PreviewsDiv from "./previews-div";

export default async function PostsFull({ query }: { query: string }) {
   const [posts, tags] = await fetchPostsData(query);

   if (!posts) {
      notFound();
   }

   return (
      <PreviewsDiv
         posts={posts as { id: number; title: string; published_at: string; }[]}
         tags={tags as Map<number, string[]>}
      />
   )
}