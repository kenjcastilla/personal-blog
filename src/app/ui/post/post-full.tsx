import PostTitle from './post-title';
import PostSubtitle from './post-subtitle';
import PostContentTags from './post-content-tags';
import { getPostTitle, getPostDates, getPostContent, getPostTags } from '@/app/lib/post/functions';

export default async function PostFull({ id }: { id: string }) {
   const title = await getPostTitle(id);
   const dates = await getPostDates(id);
   const content = await getPostContent(id);
   const tags = await getPostTags(id);

   console.log(content);

   return (
      <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-post scroll-smooth">
         <div id="postAboveHeaderSpace" className="w-full h-[20%] md:h-[2%]"></div>
         <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%] justify-self-center
        md:flex-row md:h-[35%]">
            <div id="postTitleHeaderDiv" className="w-full
            md:flex md:flex-col-reverse md:w-[70%] md:h-full">
               <PostTitle title={title} />
            </div>
            <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
            <div id="postSubtitleDiv" className="w-full h-fit
            md:flex md:flex-col-reverse md:w-[30%] md:h-full">
               <PostSubtitle dates={dates} />
            </div>
         </div>
         <div id="postContentDiv" className="static mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%] post-content-anchor">
            <PostContentTags content={content} tags={tags} />
         </div>
         <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
      </div>
   )

}