'use client';

import React, { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// Map of links to display in the top nav menu
const links = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Bio', href: '/bio' }
]

async function isAuthenticated() {
    const supabase = createClientComponentClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.role === 'authenticated') {
        return true;
    }
    return false;
}

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
                            clsx("flex flex-row h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-md font-medium hover:bg-gray-400 dark:hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3 md:text-md",
                                { "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100": pathname === link.href, })
                        }
                    >
                        <p className="md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}