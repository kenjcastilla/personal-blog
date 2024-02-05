import Link from "next/link";

// Map of links to display in the top nav menu
const links = [
    { name: 'Home', href: '/' },
    { name: 'Bio', href: '/bio' }
]

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex flex-row h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-lg font-medium md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}