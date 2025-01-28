"use client";

import { navLinks } from "@/utils/links";
import SocialLinks from "../SocialLinks/SocialLinks";
import Link from "next/link";
import clsx from "clsx";
import { X } from "lucide-react";


interface MobileNavProps {
  closeMobileNav: () => void
  pathname: string;
}
export default function MobileNav({ closeMobileNav, pathname }: MobileNavProps) {


  return (
    <>
      <nav className="-translate-x-[1000] lg:hidden bg-background/95 backdrop-blur-md relative w-screen min-h-screen
      transition-transform duration-800 ease-in-out">
        <div className="relative z-50">
          <div className="max-w-52 w-full mx-auto py-6">
            <SocialLinks className="justify-between" size={30}/>
          </div>

          <div className="flex flex-col mt-6 p-6 gap-5 items-end justify-end max-w-1/2">
            {
              navLinks.map((link) => {
                return (
                 <Link
                 key={link.title}
                 href={link.href}
                 prefetch={true}
                 className={`font-medium text-foreground hover:text-primary-brand
                  ${clsx({
                   "text-primary-brand font-medium border-b-2 border-primary-brand text-3xl":
                     pathname === link.href,
                 })}`}
                onClick={closeMobileNav}
              >
                  {link.title}
                 </Link>
                )
              })
            }
          </div>
        </div>

        <div className="px-4">
          <button onClick={closeMobileNav} className="hover:border-orange-500 border-primary-brand hover:bg-amber-600/10 flex justify-center items-center bg-transparent border-dashed
           border w-16 aspect-square rounded-full text-center cursor-pointer transition-all duration-200 ease-in-out">
            <X />
          </button>
        </div>
        <footer className="fixed w-full bottom-2 text-xs text-center text-gray-700">
          <p>bj.dev™ © 2024</p>
        </footer>
      </nav>
    </>
  );
}
