import parse from 'html-react-parser';
import { createClient } from '../../../utils/supabase/server-client';

export default async function getQuote() {
   const supabase = await createClient();

   const { data, error } = await supabase
      .from('quotes')
      .select('author, quote, work')
      .order('created_at', { ascending: false })
      .limit(1);

   return { author: data![0]?.author, quote: data![0]?.quote, work: parse(data![0]?.work!) };

}