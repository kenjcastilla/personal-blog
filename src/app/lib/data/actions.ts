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
                id, title, publish_date, 
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
                id, title, publish_date, 
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
            id: data[0].rows[0].id,
            title: data[0].rows[0].title,
            date: data[0].rows[0].publish_date,
            content: data[0].rows[0].content,
        };
        const topData = {
            id: data[1].rows[0].id,
            title: data[1].rows[0].title,
            date: data[1].rows[0].publish_date,
            content: data[1].rows[0].content,
        };

        return [recentData, topData];


    } catch (error) {
        throw new Error('Failed to fetch data for home page post previews from database.');
    }
}

export async function fetchPostData(id: string) {
    noStore();

    try {
        const result = sql`SELECT title, write_date, publish_date, interaction, content 
            FROM post WHERE id = ${id};`;
        const rawData = await Promise.all([result]);
        const data = {
            title: rawData[0].rows[0].title,
            writeDate: rawData[0].rows[0].write_date,
            publishDate: rawData[0].rows[0].publish_date,
            interaction: rawData[0].rows[0].interaction,
            content: rawData[0].rows[0].content,
        }
        return data;
    }
    catch (error) {
        throw new Error('Failed to fetch data for posts previews from database.');
    }
}