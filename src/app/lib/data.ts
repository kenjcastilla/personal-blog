import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchPost() {
    noStore();
    //TODO
}

export async function fetchPreviewData() {
    noStore();

    try {
        const recent = sql`
            SELECT 
                title, publish_date, 
                SUBSTR(
                    SUBSTR(content, 1, 80), 
                    1, 
                    80 - POSITION(" " IN (REVERSE(SUBSTR(content, 1, 80))))
                ) AS content
            FROM posts
            WHERE publish_date = MAX(publish_date);
            `;
    
        const top = sql`
            SELECT 
                title, publish_date, 
                SUBSTR(
                    SUBSTR(content, 1, 80), 
                    1, 
                    80 - POSITION(" " IN (REVERSE(SUBSTR(content, 1, 80))))
                ) AS content
            FROM posts
            WHERE interaction = MAX(interaction);
            `;
        
        const data = await Promise.all([
            recent,
            top
        ]);
        
        const recentData = {
            title: data[0].rows[0].title,
            date: data[0].rows[0].publish_date,
            content: data[0].rows[0].content,
        };
        const topData = {
            title: data[1].rows[0].title,
            date: data[1].rows[0].publish_date,
            content: data[1].rows[0].content,
        };

        return [recentData, topData];


    } catch (error) {
        throw new Error('Failed to data for home page post previews from database.');
    }
}