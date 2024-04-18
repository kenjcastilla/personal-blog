import { createServerComponentClient } from "./lib/data/client";
import HomePreviewsWrapper from "./ui/home/previews";
import { notFound } from "next/navigation";

async function getSupaData() {
  const supabase = createServerComponentClient();

  const { data: supaPostsData } = await supabase
    .from(`posts`)
    .select(`id, title, published_at`)
    .eq(`featured`, true)

  const postIds = supaPostsData!.map(post => post.id);

  const { data: supaTagsData } = await supabase
    .from('tag_post')
    .select(`post_id, tags(name)`)
    .in(`post_id`, postIds)

  let tagsData = new Map();
  postIds.forEach((postId) => {
    tagsData.set(postId, []);
  });

  supaTagsData!.forEach((record) => {
    tagsData.get(record.post_id).push(record!.tags!.name);
  })

  if (!supaPostsData) {
    return [[], []];
  }

  return [
    supaPostsData as { id: number; title: string; published_at: string; }[],
    tagsData as Map<number, string[]>
  ]
}

export default async function Page() {
  const [posts, tags] = await getSupaData();

  if (!posts) {
    notFound();
  }

  return (
    <div id="homeFull" className="grid justify-items-center w-full h-full">
      <div id="homeTopDivider" className="w-full h-[5%]"></div>
      <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[45%]
            sm:h-[40%]">
        <div id="homeTitleHeaderDiv" className="flex-1 w-full">
          <h1 id="homeTitleHeader" className="flex-1 w-full h-fit bg-white text-center text-4xl text-black rounded-sm
            sm:text-4xl
            md:text-6xl">
            Unsolicited Verbosity
          </h1>
        </div>
        <div id="homeTitleSubheaderDiv" className="flex-1 mt-1 w-full h-fit">
          <h2 id="homeTitleSubheader" className="text-center text-base w-full
            md:text-xl
            ">
            A Blog by KenJC
          </h2>
        </div>
      </div>
      <div id="homePreviewsDiv" className="flex flex-col gap-y-8 justify-self-center content-center w-[60%] h-[50%]
            sm:h-[65%]
            md:gap-y-5">
        <HomePreviewsWrapper
          posts={posts as {
            id: number;
            title: string;
            published_at: string;
          }[]}
          tags={tags as Map<number, string[]>}
        />
      </div>
    </div >
  );
}
