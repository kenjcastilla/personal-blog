'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();

   const handleSearch = useDebouncedCallback((term) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set('query', term);
      } else {
         params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`);
   }, 300);

   return (
      <div id="postsSearchDiv" className="flex flex-col content-center justify-center w-[80%] h-[2em] sm:w-[75%] md:w-[70%] lg:w-[60%]">
         <input id="postsSearchInput"
            placeholder="Filter posts by tags..."
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full h-full px-1 bg-white dark:bg-black text-black dark:text-white border-2 rounded-lg border-black dark:border-gray-400"
         />
      </div>
   );
}
