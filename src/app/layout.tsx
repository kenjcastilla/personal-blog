import type { Metadata } from "next";
import { cabin, coda, yantramanav, istok, tenor_sans } from "./ui/fonts";
// import { Yantramanav } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/nav-links";
import NavMenu from "./ui/nav-menu";


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
    <html lang="en" className={istok.className}>
      <div className="fixed flex flex-col w-screen h-screen">
        <NavMenu />
        <main id="mainView" className="w-full h-full">
          {children}
        </main>
      </div>
    </html>
  );
}
