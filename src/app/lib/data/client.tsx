import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "./definitions";

require('dotenv');

export const supabase = createServerComponentClient<Database>(
    {cookies: cookies}
);


// process.env.SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!