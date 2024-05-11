import { createClient } from "../../auth/client/server-client";

export async function getHomeData() {
  const supabase = createClient();
  
  const { data: supaPostsData } = await supabase
    .from(`posts`)
    .select(`id, title, published_at`)
    .eq(`featured`, true)
    .single()

  const postId = supaPostsData!.id || '0';

  const { data: supaTagsData } = await supabase
    .from('tag_post')
    .select(`post_id, tags(name)`)
    .in(`post_id`, postId)

  let tagsData: any[] = [];
  supaTagsData!.forEach((tag) => {
    tagsData.push(JSON.parse(JSON.stringify(tag.tags)).name);
  })

  if (!supaPostsData) {
    return [[], []];
  }

  return [
    supaPostsData as { id: number; title: string; published_at: string; },
    tagsData as string[]
  ]
}
