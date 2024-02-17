import { fetchPreviewData } from "@/app/lib/data";
import { entries } from "@/app/lib/placeholder-data";

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
            <Preview title={entries[0].title} date={entries[0].writtenDate} content={entries[0].content.substring(0, 85)} />
            <Preview title={entries[0].title} date={entries[0].writtenDate} content={entries[0].content.substring(0, 85)} />
        </>
    )
}

export function Preview({
    title,
    date,
    content
}:
    {
        title: string,
        date: string,
        content: string,
    }) {

    return (
        <div id="preview" className="grid border-4 mt-[1%] w-full h-full">
            <div className="grid bg-white ml-[50%] w-[2%] h-[10%] md:w-[15%] md:h-[22%] md:justify-self-end">
                <p className="border-2 mr-[1%] w-full bg-white text-black text-center text-xs md:text-lg">{date}</p>
            </div>
            <div className="justify-self-start ml-[1%] w-[65%] h-[40%]">
                <p className="justify-self-start text-xl md:text-3xl">{title}</p>
            </div>
            <div>
                <p className="justify-self-start ml-[1%] w-[80%] text-sm md:text-xl">{content}...</p>
            </div>
        </div>
    );
}