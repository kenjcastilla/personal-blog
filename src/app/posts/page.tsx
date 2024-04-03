import { notFound } from "next/navigation";
import { supabase } from "../lib/data/client";
import PostsPreviewsWrapper from "../ui/home/previews";

async function getPostsSupaData() {
  const { data: supaPostsData } = await supabase
    .from(`posts`)
    .select(`id, title, publish_date`)

  const { data: supaTagsData } = await supabase
    .from('tag_post')
    .select(`post_id, tags(name)`)

  const postIds = supaTagsData?.map((datum) => datum.post_id);


  let tagsData = new Map();
  postIds?.forEach((postId) => {
    tagsData.set(postId, []);
  });

  supaTagsData!.forEach((record) => {
    tagsData.get(record.post_id).push(record!.tags!.name);
  })

  console.log(tagsData);

  console.log('Posts Data after query:');
  console.log(supaPostsData);
  console.log('Tags Data after query: ');
  console.log(supaTagsData);

  if (!supaPostsData) {
    return [[], []];
  }

  return [
    supaPostsData as { id: number; title: string; publish_date: string; }[],
    tagsData as Map<number, string[]>
  ]
}

export default async function Posts() {
  const [posts, tags] = await getPostsSupaData();

  if (!posts) {
    notFound();
  }
  return (
    <div id="postsFull" className="grid justify-items-center w-full h-full overflow-y-auto">
      <div id="homeTopDivider" className="w-full h-[5%]"></div>
      <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[45%]
            sm:h-[40%]">
        <div id="homeTitleHeaderDiv" className="flex-1 w-full">
          <h1 id="homeTitleHeader" className="flex-1 w-full h-fit text-center text-3xl rounded-sm
            sm:text-3xl
            md:text-5xl">
            Posts
          </h1>
        </div>
      </div>
      <div id="postsPreviewsDiv"
        className="flex flex-col gap-y-8 justify-self-center content-center w-[60%] h-[50%]
            sm:h-[65%]
            md:gap-y-5">
        <PostsPreviewsWrapper
          posts={posts as {
            id: number;
            title: string;
            publish_date: string;
          }[]}
          tags={tags as Map<number, string[]>}
        />
      </div>
    </div>
  );
}