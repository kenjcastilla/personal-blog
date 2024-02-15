import { fetchPreviewData } from "@/app/lib/data";

export default async function PreviewWrapper() {

}

export function Preview({
    date,
    title,
    content,
}: 
{
    date: string,
    title: string,
    content: string,
}) {
    return (
        <div className="flex flex-col ml-[20%] mr-[20%] w-[60%] h-[60%]">
            <div className="flex justify-self-end w-[25%] h-[20%]"></div>
        </div>
    )
}