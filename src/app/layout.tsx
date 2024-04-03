import type { Metadata } from "next";
import { cabin, coda, yantramanav, istok, tenor_sans } from "./ui/fonts";
import "./globals.css";
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
    <html lang="en" className={`${istok.className} text-black dark:text-white`}>
      <body>
        <div className="fixed flex flex-col w-screen h-screen text-black dark:text-white">
          <NavMenu />
          <main id="mainView" className="w-full h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
