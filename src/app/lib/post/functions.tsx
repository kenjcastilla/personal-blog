import { createClient } from "../../auth/client/server-client";

export async function getPostTitle(id: string) {
   const supabase = createClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`title`)
      .eq('id', id)
      .single()

   return postData?.title!;
}

export async function getPostDates(id: string) {
   const supabase = createClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`published_at, write_date`)
      .eq('id', id)
      .single()

   return postData;
}

export async function getPostContent(id: string) {
   const supabase = createClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`content`)
      .eq('id', id)
      .single()

   return postData?.content;
}

export async function getPostTags(id: string) {
   const supabase = createClient();
   const { data: supaTagsData } = await supabase
      .from('tag_post')
      .select(`post_id, tags(name)`)
      .eq(`post_id`, id)

   let tags: any[] = [];
   supaTagsData!.forEach((tag) => {
      tags.push(JSON.parse(JSON.stringify(tag.tags)).name);
   });

   return tags;
}