import { PublishPostForm } from "../lib/publish-post/publish-form";

export default async function PublishPost() {
    console.log('In PublishPost()...');

    return (
        <>
            <div id="publishFullDiv" className="flex flex-col items-center w-full h-full">
                <h1 id="publishHeader" className="w-[80%]">Publish New Post</h1>
                <div id="titleFormDivider" className="w-full h-[2em]"></div>
                <div id="publishFormDiv" className="w-[80%] h-fit">
                    <PublishPostForm />
                </div>
            </div>
        </>
    );
}