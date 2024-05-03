'use client';

import React, { useEffect, useState } from "react";
import NavLinks from "./nav-links";

export default function NavMenu() {
    const [visible, setVisible] = useState(true);
    // const [scrollY, setScrollY] = useState(0);

    // useEffect(() => {
    //     if (scrollY > 5) {
    //         setVisible(true);
    //     }
    //     else {
    //         setVisible(false);
    //     }
    // }, [scrollY])
    return (
        <div key="thekey" className={`flex flex-row mt-[1%] w-[94%] md:ml-[1%]
          ml-0 w-full ${visible ? 'sticky-top-0' : 'h-0'} md:sticky-top-0`}>
            <NavLinks />
        </div>
    );
}