'use server';

import SignInForm from './sign-in-form';
import { Suspense } from 'react';

require('dotenv');

export default async function SignIn() {

    return <>
        <h1 id="signinHeader" className="text-3xl text-center">Sign In</h1>
        <Suspense>
            <SignInForm />
        </Suspense>
    </>
}