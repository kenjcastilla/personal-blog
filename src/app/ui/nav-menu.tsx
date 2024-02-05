import Link from "next/link";
import NavLinks from "./nav-links";

export default function NavMenu() {
    return (
        <div className="flex h-16 flex-row px-3 py-2 md:px-2">
            <Link
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
                href="/"
            >
                <div className="w-32 text-white md:w-40">
                    LOGO or PHOTO IDK
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2">
                <NavLinks />
            </div>

        </div>
    )
}