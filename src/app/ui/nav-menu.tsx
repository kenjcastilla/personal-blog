'use client';

import React, { useEffect, useState } from "react";
import NavLinks from "./nav-links";

export default function NavMenu() {
    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // function handleScroll() {
    //     const currentScrollPos = window.scrollY;
    //     console.log(currentScrollPos);

    //     if (currentScrollPos > prevScrollPos) {
    //         setVisible(false);
    //     } else {
    //         setVisible(true);
    //     }
    //     console.log(setVisible);

    //     setPrevScrollPos(currentScrollPos);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // })
    // useEffect(() => {
    //     let previousScrollPosition = 0;
    //     let currentScrollPosition = 0;
    //     console.log(previousScrollPosition);

    //     let mainView = document.getElementById('postFull');

    //     mainView!.addEventListener('scroll', e => {
    //         // Get the new Value
    //         currentScrollPosition = mainView!.scrollTop

    //         //Subtract the two and conclude
    //         if (previousScrollPosition - currentScrollPosition < 0) {
    //             setVisible(false);
    //         } else if (previousScrollPosition - currentScrollPosition > 0) {
    //             setVisible(true);
    //         }

    //         console.log(previousScrollPosition);
    //         // Update the previous value
    //         previousScrollPosition = currentScrollPosition;
    //     });
    // }, []);

    return (
        <div key="thekey" className={`flex flex-row mt-[1%] w-[94%] md:ml-[1%]
          ml-0 w-full ${visible ? 'sticky-top-0' : 'h-0'} md:sticky-top-0`}>
            <NavLinks />
        </div>
    );
}