import { createServerComponentClient } from "../data/client";

export default async function getPostsSupaData() {
   const supabase = createServerComponentClient();
   const { data: supaPostsData } = await supabase
      .from(`posts`)
      .select(`id, title, published_at`)

   const { data: supaTagsData } = await supabase
      .from('tag_post')
      .select(`post_id, tags(name)`)

   const postIds = supaTagsData?.map((datum) => datum.post_id);

   let tagsData = new Map();
   postIds!.forEach((postId) => {
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