'use client';

import Link from "next/link";
import { entries } from "@/app/lib/data/placeholder-data";

function Preview({
    id,
    title,
    date,
    tags
}:
    {
        id: number,
        title: string,
        date: string,
        tags: string,
    }) {
    return (
        <Link href={`/post/${id}`} className="">
            <div id="preview" className="grid border-4 w-full h-full">
                <div className="grid bg-white w-full h-[15%] 
                sm:w-full
                md:w-full
                lg:justify-self-end lg:w-[15%]">
                    <p className="border-2 
                    w-full bg-white text-black text-center text-xs 
                    md:text-lg
                    ">
                        {date}
                    </p>

                </div>
                <div className="justify-self-start ml-[1%] w-[65%] h-[40%]">
                    <p className="justify-self-start text-xl 
                    sm:text-xl
                    md:text-3xl">{title}</p>
                </div>
                <div className="justify-self-start w-[80%] h-[45%]">
                    <p className="justify-self-start 
                    ml-[1%] w-[80%] text-xs
                    sm:text-sm 
                    md:text-xl">{tags}</p>
                </div>
            </div>
        </Link>
    );
}

export default function PostsPreviewsWrapper({
    posts,
    tags
}: {
    posts: {
        id: number;
        title: string;
        publish_date: string;
    }[],
    tags: Map<number, string[]>;
}) {
    console.log('POSTS DATA IN WRAPPER: ');
    console.log(posts);
    console.log('TAGS: ');
    console.log(tags);
    
    return <>{
        posts.map((post, idx) => (
            <Preview
                key={idx}
                id={post.id}
                title={post.title}
                date={post.publish_date}
                tags={tags.get(post.id)!.join(', ')}
            />
        ))
    }</>

    // return (
    //     <>
    //         <Preview id={entries[0].id} title={entries[0].title} date={entries[0].writeDate} tags={entries[0].content.substring(0, 85)} />
    //         <Preview id={entries[0].id} title={entries[0].title} date={entries[0].writeDate} tags={entries[0].content.substring(0, 85)} />
    //     </>
    // )
}
