import { notFound } from "next/navigation";
import PostsPreviewsWrapper from "../ui/home/previews";
import { fetchPostsSupaData } from "../lib/posts/actions";
import Search from "../ui/posts/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query?.trim();
  const [posts, tags] = await fetchPostsSupaData(query);

  if (!posts) {
    notFound();
  }

  return (
    <div id="postsFull" className="grid justify-items-center items-center w-full h-full">
      <div className="flex flex-col items-center justify-start space-y-4 w-full h-full overflow-y-auto">
        <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[20%]
            sm:h-[35%]
            md:h-[15%]">
          <div id="homeTitleHeaderDiv" className="flex-1 content-center w-full h-auto">
            <h1 id="homeTitleHeader" className="flex-1 w-full h-fit text-center text-3xl rounded-sm
            sm:text-3xl
            md:text-5xl">
              Posts
            </h1>
          </div>
        </div>
        <Search />
        <div id="postsPreviewsDiv"
          className="flex flex-col gap-y-8 content-start overflow-y-auto scroll-my-1 scroll-smooth scrollbar-previews w-[70%] h-[60%]
        md:gap-y-5 md:h-[65%]
        lg:h-[65%]">
          <PostsPreviewsWrapper
            posts={posts as {
              id: number;
              title: string;
              published_at: string;
            }[]}
            tags={tags as Map<number, string[]>}
          />
        </div>
      </div>
    </div>
  );
}