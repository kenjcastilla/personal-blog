import { Metadata } from 'next';
import { Suspense } from 'react';
import SignInForm from '../ui/sign-in/sign-in-form';

export const metadata: Metadata = {
    title: 'Sign In'
}

export default function Page() {
    return (
        <div id="signInPageContainerFull" className="flex flex-col items-center w-full h-[80%] mt-[8em]">
            <h1 id="signinHeader" className="text-3xl text-center">Sign In</h1>
            <div id="signInFormContainer" className="flex flex-col justify-center w-[80%] h-[60%]">
                <Suspense>
                    <SignInForm />
                </Suspense>
            </div>
        </div>
    )
}