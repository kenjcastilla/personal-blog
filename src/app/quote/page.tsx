import { Suspense } from "react";
import { Metadata } from "next";
import QuoteDiv from "../ui/quote/quoteDiv";
import getQuote from "../lib/quote/actions";

export const metadata: Metadata = {
   title: 'Weekly Quote',
}

export default async function Page() {
   const quote = await getQuote();
   return (
         <Suspense>
            <QuoteDiv quote={quote} />
         </Suspense>
   )
}