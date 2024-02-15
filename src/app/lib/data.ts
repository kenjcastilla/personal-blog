import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchPost() {
    noStore();
    //TODO
}

export async function fetchPreviewData(postIds: (number)[]) {
    noStore();

    const data = sql`
        SELECT 
            title, date, 
            SUBSTR(
                SUBSTR(content, 1, 80), 
                1, 
                80 - POSITION(" " IN (REVERSE(SUBSTR(content, 1, 80))))
            ) AS content
        FROM posts
        WHERE post_id IN ${postIds[0]}, ${postIds[1]}`;
}