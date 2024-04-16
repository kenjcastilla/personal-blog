import parse from 'html-react-parser';
import './styles.css';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@/app/lib/data/client";
import { Database } from "@/app/lib/data/definitions";
import { cookies } from "next/headers";


export default async function Post({ params }: { params: { id: string } }) {
    const supabase = createServerComponentClient();
    const id = params.id;

    const { data: postData } = await supabase
        .from('posts')
        .select(`id, title, content, published_at, write_date`)
        .eq('id', id)
        .single()

    const { data: tagsData } = await supabase
        .from(`tag_post`)
        .select(`tags(name)`)
        .eq(`post_id`, id)

    console.log('JUST RETRIEVED THAT STUFF FROM SUPABASE YUH.')

    if (!postData) {
        notFound();
    }

    const tags = tagsData?.map(item => item.tags?.name);

    return (
        <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto ">
            <div id="postAboveHeaderSpace" className="w-full h-[5%] md:h-[2%]"></div>
            <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%]
                    md:flex-row md:h-[35%]">
                <div id="postTitleHeaderDiv" className="w-full
                        md:flex md:flex-col-reverse md:w-[70%] md:h-full">
                    <h1 id="postTitle" className="text-5xl w-full h-full md:h-fit">
                        {postData.title}
                    </h1>
                </div>
                <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
                <div id="postSubtitleDiv" className="w-full h-fit
                        md:flex md:flex-col-reverse md:w-[30%] md:h-full">
                    <h2 id="postSubtitle" className="text-xl w-full h-fit
                                md:text-end">
                        Published: {postData.published_at}<br />Written: {postData.write_date}
                    </h2>
                </div>
            </div>
            <div id="postContentDiv" className="mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%]">
                <p id="content" className="w-full h-auto">
                    {parse(postData.content!)}
                </p>
                <p id="tags" className="text-center mt-[6em] w-[100%] h-fit">
                    Tags: {tags?.join(', ')}
                </p>
                <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
            </div>
        </div>
    );
}
