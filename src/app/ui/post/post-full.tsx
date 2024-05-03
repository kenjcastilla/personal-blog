import PostTitle from './post-title';
import PostSubtitle from './post-subtitle';
import PostContentTags from './post-content-tags';

export default function PostFull({ id }: { id: string }) {
   return (
         <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-post scroll-smooth">
            <div id="postAboveHeaderSpace" className="w-full h-[20%] md:h-[2%]"></div>
            <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%] justify-self-center
        md:flex-row md:h-[35%]">
               <div id="postTitleHeaderDiv" className="w-full
            md:flex md:flex-col-reverse md:w-[70%] md:h-full">
                  <PostTitle id={id} />
               </div>
               <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
               <div id="postSubtitleDiv" className="w-full h-fit
            md:flex md:flex-col-reverse md:w-[30%] md:h-full">
               <PostSubtitle id={id} />
               </div>
            </div>   
            <div id="postContentDiv" className="static mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%] post-content-anchor transition-opacity duration-1500 ease-in opacity-100">
               <PostContentTags id={id} />
            </div>
            <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
         </div>
   )

   // return (
   //    <div id="postFull" className="flex flex-col items-center w-full h-full overflow-y-auto scrollbar-post scroll-smooth">
   //       <div id="postAboveHeaderSpace" className="w-full h-[20%] md:h-[2%]"></div>
   //       <div id="postHeaderDiv" className="flex flex-col p-2 w-[80%] h-[95%] justify-self-center
   //      md:flex-row md:h-[35%]">
   //          <div id="postTitleHeaderDiv" className="w-full
   //          md:flex md:flex-col-reverse md:w-[70%] md:h-full">
   //             <Suspense>
   //                <PostTitle id={id} />
   //             </Suspense>
   //          </div>
   //          <div id="postHeaderDivider" className="w-full h-[3em] md:w-0 md:h-0"></div>
   //          <div id="postSubtitleDiv" className="w-full h-fit
   //          md:flex md:flex-col-reverse md:w-[30%] md:h-full">
   //             <Suspense>
   //                <PostSubtitle id={id} />
   //             </Suspense>
   //          </div>
   //       </div>
   //       <div id="postContentDiv" className={`mb-1 w-[90%] h-0 text-md md:text-lg md:w-[80%] md:mt-[5%] post-content-anchor transition-opacity duration-1500 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}>
   //          <Suspense>
   //             <PostContentTags id={id} />
   //          </Suspense>
   //          <div id="bottomOfPage" className="w-[90%] md:h-5">&nbsp;</div>
   //       </div>
   //    </div>
   // )
}