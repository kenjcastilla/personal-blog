'use server';

// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "../lib/data/definitions";
// import { cookies } from "next/headers";
import LoginForm from './login-form';

require('dotenv');

export default async function Login() {
    // const supabase = createServerComponentClient<Database>({ cookies });
    // const {
    //     data: { user },
    // } = await supabase.auth.getUser();

    return <LoginForm />
}