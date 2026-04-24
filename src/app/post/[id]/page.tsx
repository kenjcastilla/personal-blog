import { Suspense } from 'react';
import { Metadata } from 'next';
import PostFull from '@app/ui/post/post-full';
import Loading from '../loading';
import React from "react";

export const metadata: Metadata = {
   title: 'Post',
}

export default async function Page(
   { params }: {
      params: { id: string }
   }
) {
   const { id } = await params;
   return (
       <Suspense fallback={<Loading />}>
           <PostFull id={ id } />
       </Suspense>
   )
}