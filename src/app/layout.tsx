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
    <div className="fixed flex flex-col w-screen h-screen">
      <div className="sticky-top-0 flex flex-row mt-[1%] w-[94%] ml-[3%]
          sm:ml-[1%] sm:w-full">
        <NavLinks />
      </div>
      <main className="w-full h-full">
        <div className="w-full h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
