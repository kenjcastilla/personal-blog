import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/nav-links";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kinetic Juice Cartons",
    default: "Kinetic Juice Cartons"
  },
  description: "finally created this blog and for what idk but here we are yay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-row w-full">
        <NavLinks />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
