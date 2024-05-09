import { Suspense } from 'react';
import { Metadata } from 'next';
import PostFull from '@/app/ui/post/post-full';

import LoadingSkeleton from '../loading';

export const metadata: Metadata = {
   title: 'Post',
}

export default function Page(
   { params }: {
      params: { id: string }
   }
) {
   return (
       <Suspense fallback={<LoadingSkeleton />}>
           <PostFull id={params.id} />
       </Suspense>
   )
}