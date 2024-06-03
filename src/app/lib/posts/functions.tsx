import { createClient } from "../../auth/client/server-client";

export async function fetchPostsData(query: string = '') {
   const supabase = createClient();

   // Fetch tag ids and names
   const { data: matchedTagsData } = await supabase
      .from(`tags`)
      .select(`id`)
      .ilike(`name`, `%${query}%`)

   // Create array of tag ids
   const matchedTagIds = matchedTagsData?.map(tag => tag.id) || [];

   // Use array of tag ids to fetch respective post ids
   const { data: postIdsData } = await supabase
      .from(`tag_post`)
      .select(`post_id`)
      .in(`tag_id`, matchedTagIds!)

   // Create array of post ids
   const postIds = postIdsData?.map(post => post.post_id) || [];

   // Fetch all tag--post pairs where post id is in the array of post ids
   const { data: tagPostPairsData } = await supabase
      .from(`tag_post`)
      .select(`tag_id, post_id`)
      .in(`post_id`, postIds)

   // Create array of tag ids
   const tagIds = tagPostPairsData?.map(record => record.tag_id) || [];

   // Use array of post ids to fetch all post data
   const { data: rawPostsData } = await supabase
      .from(`posts`)
      .select(`id, title, published_at`)
      .in(`id`, postIds)
      .order(`published_at`, {ascending: false})

   const { data: rawTagsData } = await supabase
      .from(`tags`)
      .select(`id, name`)
      .in(`id`, tagIds)

   let tagMap = new Map<number, string>();
   rawTagsData?.forEach((tag) => {
      tagMap.set(tag.id, tag.name || '');
   })

   // Create Map with key<number> post_id and value<number[]> array of respective tag_ids
   let tagsData = new Map<number, string[]>();
   postIds!.forEach((postId) => {
      tagsData.set(postId, []);
   });

   tagPostPairsData?.forEach((pair) => {
      tagsData.get(pair.post_id)?.push(tagMap.get(pair.tag_id) || '');
   })

   if (!rawPostsData) {
      return [[], []];
   }

   return [
      rawPostsData as { id: number; title: string; published_at: string; }[],
      tagsData as Map<number, string[]>,
   ]
}
