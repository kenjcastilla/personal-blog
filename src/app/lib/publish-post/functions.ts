'use server';

import { createServerComponentClient } from "../data/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";


export async function insertPostIntoSupabase(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const supabase = createServerComponentClient();

  // Use Zod to validate formData
  const CategoryEnum = z.enum(["intellection", "music", "global", "miscellaneous"]);
  const schema = z.object({
    category: z.intersection(CategoryEnum, z.string()),
    content: z.string().min(1),
    title: z.string().min(1),
    write_date: z.string().length(10),
    tags: z.string().min(1),
  })
  const parse = schema.safeParse({
    category: formData.get("category"),
    content: formData.get("content"),
    title: formData.get("title"),
    write_date: formData.get("write_date"),
    tags: formData.get("tags"),
  })

  if (!parse.success) {
    // console.log('Parse failed...')
    // console.log(parse.error)
    return { message: "Failed to build post data" }
  }

  console.log('Zod safeParse successful.')

  const data = parse.data;
  const tagsDataString = data.tags.split(', ');
  const tagsDataArray = tagsDataString.map((tag) => {
    return { name: tag }
  });

  try {
    // Insert data into Supabase tables 'posts' and 'tags'
    await supabase.from('posts').insert(
      {
        category: data.category,
        content: data.content,
        title: data.title,
        write_date: data.write_date
      }
    ).then((error) => {
      // console.log('Post insert error: ');
      // console.log(error);
    });
    await supabase.from('tags').insert(tagsDataArray)
      .then((error) => {
        // console.log('Tags insert error: ');
        // console.log(error);
      })

    revalidatePath('/');
    return { message: "Successfully inserted form data into Supabase tables 'posts' and 'tags'" };
  }
  catch (e) {
    console.log("Failed to insert form data into Supabase table 'Posts'");
    return { message: "Failed to insert form data into Supabase table 'Posts'" };
  }

}
