'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the top nav menu
const links = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Quote', href: '/quote' }
]

// Returns Link elements as a React fragment
export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={
                            clsx("flex flex-row h-[32px] md:h-[48px] grow items-center justify-center gap-2 rounded-lg md:rounded-md p-3 text-sm md:text-md hover:bg-link_hover_gray dark:hover:bg-custom_gray md:flex-none md:justify-start md:p-2 md:px-3 md:text-md",
                                { "bg-custom_black text-custom_white hover:bg-black dark:bg-custom_white dark:text-custom_black dark:hover:bg-custom_white": pathname === link.href, })
                        }
                    >
                        <p className="md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}