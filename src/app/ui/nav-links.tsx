'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

// Map of links to display in the top nav menu
const links = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Bio', href: '/bio' }
]

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
                            clsx("flex flex-row h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-lg font-medium hover:bg-gray-800 md:flex-none md:justify-start md:p-2 md:px-3",
                                { "bg-white text-black hover:bg-white": pathname === link.href, })
                        }
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}