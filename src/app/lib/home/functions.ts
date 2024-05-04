import { createServerComponentClient } from "../data/client";

export async function getHomeData() {
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