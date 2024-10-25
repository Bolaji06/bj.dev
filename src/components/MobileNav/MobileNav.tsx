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
      <nav className="lg:hidden bg-background/60 backdrop-blur-sm relative w-screen h-screen overflow-hidden
      transition-all duration-800 ease-in-out">
        <div className="relative">
          <div className="max-w-52 w-full mx-auto mt-6">
            <SocialLinks className="justify-between" size={30}/>
          </div>

          <div className="flex flex-col mt-6 p-6 gap-5 items-end justify-end max-w-1/2">
            {
              navLinks.map((link) => {
                return (
                 <Link
                 key={link.title}
                 href={link.href}
                 className={`font-medium text-lg text-slate-200 ${clsx({
                  "text-amber-400 text-3xl font-medium border-b-4 border-primary-brand transition-all duration-200":
                    pathname === link.href,
                })}`}
              >
                  {link.title}
                 </Link>
                )
              })
            }
          </div>
        </div>

        <div className="px-4">
          <button onClick={closeMobileNav} className="hover:border-orange-500 hover:bg-amber-600/10 flex justify-center items-center bg-transparent border-dashed
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
