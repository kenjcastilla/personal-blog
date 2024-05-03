import { createServerComponentClient } from "../data/client";

export async function getPostTitle(id: string) {
   const supabase = createServerComponentClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`title`)
      .eq('id', id)
      .single()

   return postData?.title!;
}

export async function getPostDates(id: string) {
   const supabase = createServerComponentClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`published_at, write_date`)
      .eq('id', id)
      .single()

   return postData;
}

export async function getPostContent(id: string) {
   const supabase = createServerComponentClient();
   const { data: postData } = await supabase
      .from('posts')
      .select(`content`)
      .eq('id', id)
      .single()

   return postData?.content;
}

export async function getPostTags(id: string) {
   const supabase = createServerComponentClient();
   const { data: tagsData } = await supabase
      .from(`tag_post`)
      .select(`tags(name)`)
      .eq(`post_id`, id)

   const tags = tagsData?.map(item => item.tags?.name);

   return tags;
}