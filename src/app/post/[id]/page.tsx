import { Suspense } from 'react';
import { Metadata } from 'next';
import PostFull from '@/app/ui/post/post-full';

export const metadata: Metadata = {
    title: 'Post',
}

export default function Page(
    { params }: {
        params: { id: string }
    }
) {

    return (
        <Suspense>
            <PostFull id={params.id} />
        </Suspense>
    )
}