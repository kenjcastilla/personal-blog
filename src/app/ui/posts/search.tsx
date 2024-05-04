'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();
   const [loaded, setLoaded] = useState(false);

   function handleLoad() {
      setLoaded(true);
   }

   const handleSearch = useDebouncedCallback((term) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set('query', term);
      } else {
         params.delete('query')
      }
      replace(`${pathname}?${params.toString()}`);
   }, 300);

   useEffect(() => {
      handleLoad();
   })

   return (
      <div id="postsSearchDiv" className="flex flex-col content-center justify-center w-[68%] h-[2em] sm:w-[75%] md:w-[70%] lg:w-[60%]">
         <input id="postsSearchInput"
            placeholder="Filter posts by tag..."
            onChange={(e) => handleSearch(e.target.value)}
            className={`w-full h-full px-1 bg-white dark:bg-black text-black dark:text-custom_white border-2 rounded-lg border-black dark:border-custom_white
            transition-opacity ease-in duration-300 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}
         />
      </div>
   );
}
