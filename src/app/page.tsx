import PreviewWrapper from "./ui/home/previews";

export default function Page() {
  return (
    <div id="homeFull" className="grid justify-items-center w-full h-full">
      <div id="homeTopDivider" className="w-full h-[5%]"></div>
      <div id="homeTitleDiv" className="flex flex-col items-center content-center w-[80%] h-[45%]
            sm:h-[40%]">
        <div id="homeTitleHeaderDiv" className="flex-1 w-full">
          <h1 id="homeTitleHeader" className="flex-1 w-full h-fit bg-white text-center text-4xl text-black rounded-sm
            sm:text-4xl
            md:text-6xl">
            Kinetic Juice Cartons
          </h1>
        </div>
        <div id="homeTitleSubheaderDiv" className="flex-1 mt-1 w-full h-fit">
          <h2 id="homeTitleSubheader" className="text-center text-base w-full
            md:text-xl
            dark:text-white">
            A Blog by KenJC
          </h2>
        </div>
      </div>
      <div id="previewsDiv" className="flex flex-col gap-y-8 justify-self-center content-center w-[60%] h-[50%]
            sm:h-[65%]
            md:gap-y-5">
        <PreviewWrapper />
      </div>
    </div >
  );
}

{/* <div id="homeTitleDiv" className="grid justify-items-center w-[80%] h-[40%]
            sm:h-[35%]"></div> */}