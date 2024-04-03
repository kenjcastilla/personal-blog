'use server';

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { supabase } from "../data/client";

export async function insertPostIntoSupabase(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const CategoryEnum = z.enum(["intellection", "music", "global", "miscellaneous"]);
  const schema = z.object({
    category: z.intersection(CategoryEnum, z.string()),
    content: z.string().min(1),
    title: z.string().min(1),
    write_date: z.string().length(10),
    tags: z.array(z.string()).nonempty(),
  })
  // type CategoryEnum = z.infer<typeof CategoryEnum>;

  const parse = schema.safeParse({
    category: formData.get("category"),
    content: formData.get("content"),
    title: formData.get("title"),
    write_date: formData.get("write_date"),
    tags: formData.get("tags"),
  })

  if (!parse.success) {
    return { message: "Failed to build post data" }
  }

  const data = parse.data;
  const tagsDataArray = data.tags.map((tag) => {
    return { name: tag }
  })

  try {
    //Insert data into Supabase 'posts' and 'tags'
    await supabase.from('posts').insert(
      {
        category: data.category,
        content: data.content,
        title: data.title,
        write_date: data.write_date,
      }
    )
    await supabase.from('tags').insert(tagsDataArray)

    revalidatePath('/');
    return { message: "Successfully inserted form data into Supabase tables 'posts' and 'tags'"}
  } catch (e) {
    return { message: "Failed to insert form data into Supabase table 'Posts'" }
  }

}
