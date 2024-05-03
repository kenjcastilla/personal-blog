import parse from 'html-react-parser';
import { createServerComponentClient } from "../data/client";

export default async function getQuote() {
   const supabase = createServerComponentClient();

   const { data, error } = await supabase
      .from('quotes')
      .select('author, quote, work')
      .order('created_at', { ascending: true })
      .limit(1);

   // const author = data![0].author;
   // const quote = data![0].quote;
   // const work = parse(data![0].work!);

   return { author: data![0]?.author, quote: data![0]?.quote, work: parse(data![0]?.work!) };

}