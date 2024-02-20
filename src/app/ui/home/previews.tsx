import { fetchPreviewData } from "@/app/lib/data";
import { entries } from "@/app/lib/placeholder-data";
import Link from "next/link";

export default async function PreviewWrapper() {
    //const [recentData, topData] = await fetchPreviewData();

    // return (
    //     <>
    //     <Preview title={recentData.title} date={recentData.date} content={recentData.content} />
    //     <Preview title={topData.title} date={topData.date} content={topData.content} />
    //     </>
    // )
    return (
        <>
            <Preview id={entries[0].id} title={entries[0].title} date={entries[0].writtenDate} content={entries[0].content.substring(0, 85)} />
            <Preview id={entries[0].id} title={entries[0].title} date={entries[0].writtenDate} content={entries[0].content.substring(0, 85)} />
        </>
    )
}

export function Preview({
    id,
    title,
    date,
    content
}:
    {
        id: string,
        title: string,
        date: string,
        content: string,
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
                <div className="justify-self-start h-[45%]">
                    <p className="justify-self-start 
                    ml-[1%] w-[80%] text-xs
                    sm:text-sm 
                    md:text-xl">{content.substring(0, 55)}...</p>
                </div>
            </div>
        </Link>
    );
}