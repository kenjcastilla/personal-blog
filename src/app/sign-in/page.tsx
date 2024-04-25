'use server';

import { Metadata } from 'next';
import { Suspense } from 'react';
import SignInForm from './sign-in-form';

require('dotenv');

export const metadata: Metadata =  {
    title: 'Sign In'
}

export default async function SignIn() {
    return <>
        <h1 id="signinHeader" className="text-3xl text-center">Sign In</h1>
        <Suspense>
            <SignInForm />
        </Suspense>
    </>
}