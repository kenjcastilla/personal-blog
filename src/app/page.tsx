import PreviewWrapper from "./ui/home/previews";

export default function Page() {
    return (
        <main>
            <div id="homeFull" className="grid w-full h-full">
                <div className="grid ml-[10%] mt-[0.5%] w-[80%] h-[15%]">
                    <h1 className="justify-self-center h-full w-full text-3xl text-center md:text-6xl">Kinetic Juice Cartons</h1>
                    <h2 className="justify-self-center text-l md:text-xl">A Blog by KenJC</h2>
                </div>
                <div className="flex flex-col w-[60%] h-[70%] ml-[20%] mt-[5%] mb-[5%]">
                    <PreviewWrapper />
                </div>
            </div>
        </main>
    );
}