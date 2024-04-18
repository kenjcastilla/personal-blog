import { notFound } from "next/navigation";
import PostsPreviewsWrapper from "../ui/home/previews";
import getPostsSupaData from "../lib/posts/actions";

export default async function Posts() {
  const [posts, tags] = await getPostsSupaData();

  if (!posts) {
    notFound();
  }

  return (
    <div id="postsFull" className="grid justify-items-center w-full h-full">
      <div id="homeTopDivider" className="w-full h-[5%]"></div>
      <div className="flex flex-col items-center content-center w-full h-[90%]">
        <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[20%]
            sm:h-[40%]
            md:h-[20%]">
          <div id="homeTitleHeaderDiv" className="flex-1 content-center w-full">
            <h1 id="homeTitleHeader" className="flex-1 w-full h-fit text-center text-3xl rounded-sm
            sm:text-3xl
            md:text-5xl">
              Posts
            </h1>
          </div>
        </div>
        <div id="postsPreviewsDiv"
          className="flex flex-col gap-y-8 justify-self-center content-center overflow-y-auto w-[70%] h-[70%]
        md:gap-y-5 md:h-[60%]
        lg:h-[75%]">
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