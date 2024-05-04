import { Suspense } from "react";
import HomeFull from "./ui/home/home-full";

export default function Page() {
   return (
      <Suspense>
         <HomeFull />
      </Suspense>
   )
}
