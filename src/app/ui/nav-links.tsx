'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the top nav menu
const links = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Bio', href: '/bio' }
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
                            clsx("flex flex-row h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-md font-medium hover:bg-custom_gray dark:hover:bg-custom_gray md:flex-none md:justify-start md:p-2 md:px-3 md:text-md",
                                { "bg-black text-custom_white hover:bg-gray-900 dark:bg-custom_white dark:text-black dark:hover:bg-custom_white": pathname === link.href, })
                        }
                    >
                        <p className="md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}