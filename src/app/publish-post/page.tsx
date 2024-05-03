import { PublishPostForm } from "../ui/publish-post/publish-form";

export default function Page() {
   
   return (
      <>
         <div id="publishFullDiv" className="flex flex-col items-center w-full h-full overflow-y-auto">
            <h1 id="publishHeader" className="w-[80%] text-4xl text-center">Publish New Post</h1>
            <div id="titleFormDivider" className="w-full h-[2em]"></div>
            <div id="publishFormDiv" className="w-[80%] h-auto mb-[3em]">
               <PublishPostForm />
            </div>
         </div>
      </>
   );
}