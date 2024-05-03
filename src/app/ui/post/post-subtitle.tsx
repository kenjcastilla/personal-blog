import { postDateFormat } from "@/app/lib/date-formats";
import { getPostDates } from "@/app/lib/post/functions";

export default async function PostSubtitle({ id }: { id: string }) {
   const dates = await getPostDates(id);

   return (
         <h2 id="postSubtitle" className="w-full h-fit text-lg
                    md:text-sm md:text-end
                    lg:text-xl">
            Published: {postDateFormat(dates!.published_at || 'N/A')}<br />Written: {dates!.write_date || 'N/A'}
         </h2>
   )
}