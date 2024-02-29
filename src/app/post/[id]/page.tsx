import { fetchPostData } from "@/app/lib/data/actions";
import { entries } from "@/app/lib/data/placeholder-data";
import parse from 'html-react-parser';
import './styles.css'

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    // const {
    //     title, 
    //     writeDate, 
    //     publishDate, 
    //     interaction, 
    //     content
    // } = await fetchPostData(id);

    const {
        title,
        writeDate,
        publishDate,
        interaction,
        content,
    } = entries[0];

    return (
        <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto ">
            <div id="postAboveHeaderSpace" className="w-full h-[5%] md:h-[2%]"></div>
            <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%]
                    md:flex-row md:h-[35%]">
                <div id="postTitleHeaderDiv" className="w-full
                        md:flex md:flex-col-reverse md:w-[70%] md:h-full">
                    <h1 id="postTitle" className="text-5xl w-full h-full md:h-fit">
                        {title}
                    </h1>
                </div>
                <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
                <div id="postSubtitleDiv" className="w-full h-fit
                        md:flex md:flex-col-reverse md:w-[30%] md:h-full">
                    <h2 id="postSubtitle" className="text-xl w-full h-fit
                                md:text-end">
                        Published: {publishDate}<br />Written: {writeDate}
                    </h2>
                </div>
            </div>
            <div id="postContentDiv" className="mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%]">
                <p id="content" className="w-full h-auto">
                    {parse(content)}
                </p>
            <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
            </div>
        </div>
    )
}