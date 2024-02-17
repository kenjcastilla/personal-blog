'use client';

import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import NavLinks from "./nav-links";

const links = [
    { label: 'Home', href: '/' },
    { label: 'Posts', href: '/posts' },
    { label: 'Bio', href: '/bio' }
];

export default function NavDropdown() {
    return (
        <div className="ml-[5%] h-full">
            <Menu>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Items>
                    {links.map((link) => (
                        <Menu.Item
                            as="a"
                            key={link.href}
                            href={link.href}
                            className="ui-active:bg-white ui-active:text-red-500 ui-not-active:bg-white ui-not-active:text-white"
                        >
                            {link.label}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Menu>
        </div>
    );
}