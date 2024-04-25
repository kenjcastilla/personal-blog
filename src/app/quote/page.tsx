'use client';

import { useState, useEffect } from "react";

export default function Quote() {
    const [loaded, setLoaded] = useState(false);

    function handleLoad() {
        setLoaded(true);
    }

    useEffect(() => {
        handleLoad();
    })

    return (
            <div id="quoteFullDiv" className="flex flex-col w-full h-full space-y-[5em] items-center justify-center">
                <div id="quoteContentDiv" className="flex flex-col w-[80%] text-center">
                    <p id="quoteText" className={`text-2xl md:text-3xl lg:text-4xl transition-opacity duration-1500 ease-in ${loaded ? "opacity-100" : "opacity-0"}`}>
                        <q>The hour is yours, but the day shall be mine!</q>
                    </p>
                    <br />
                    <p id="quoteSource" className={`text-lg md:text-2xl lg:text-2xl transition-opacity duration-1500 ease-in delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>-Ice King, <i>Adventure Time</i></p>
                </div>
                <div className="w-full h-[2em] sm:h-[3em] md:h-[6em]"></div>
            </div>
    );
}