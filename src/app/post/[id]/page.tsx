import parse from 'html-react-parser';
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@/app/lib/data/client";
import { postDateFormat } from '@/app/lib/date-formats';
import { Metadata } from 'next';

export const metadata: Metadata =  {
    title: 'Post',
}

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

    if (!postData) {
        notFound();
    }

    const tags = tagsData?.map(item => item.tags?.name);

    return (
        <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-post scroll-smooth">
            <div id="postAboveHeaderSpace" className="w-full h-[20%] md:h-[2%]"></div>
            <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%] justify-self-center
                    md:flex-row md:h-[35%]">
                <div id="postTitleHeaderDiv" className="w-full
                        md:flex md:flex-col-reverse md:w-[70%] md:h-full">
                    <h1 id="postTitle" className="text-5xl w-full h-full md:h-fit
                    md:text-4xl
                    lg:text-5xl">
                        {postData.title}
                    </h1>
                </div>
                <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
                <div id="postSubtitleDiv" className="w-full h-fit
                        md:flex md:flex-col-reverse md:w-[30%] md:h-full">
                    <h2 id="postSubtitle" className="w-full h-fit text-lg
                                md:text-sm md:text-end
                                lg:text-xl">
                        Published: {postDateFormat(postData.published_at)}<br />Written: {postData.write_date}
                    </h2>
                </div>
            </div>
            <div id="postContentDiv" className="mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%] post-content-anchor">
                <div id="postContent" className="w-full h-auto">
                    {parse(postData.content!)}
                    <p id="postTags" className="text-center mt-[6em] w-[100%] h-fit">
                        Tags: {tags?.join(', ')}
                    </p>
                </div>
                <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
            </div>
        </div>
    );
}
