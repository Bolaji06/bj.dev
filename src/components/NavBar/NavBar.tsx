"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { navLinks } from "@/utils/links";
import SocialLinks from "../SocialLinks/SocialLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaHamburger } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

  function openMobileNav(){
    setToggleNav(true);
  }

  function closeMobileNav(){
    setToggleNav(false);
  }
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed w-full py-3 px-10 bg-background/65 border-gray-800 border-b">
        <div className="flex justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="bj.dev logo"
              width={40}
              height={40}
              className="aspect-video"
            />
          </Link>

          <div className="hidden lg:flex justify-between items-center">
            <ul className="border-r border-gray-700">
              <li className="flex items-center gap-8 last:mr-5">
                {navLinks.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className={`text-sm font-medium text-slate-200 ${clsx({
                        "text-amber-400 font-medium border-b-2 border-primary-brand":
                          pathname === link.href,
                      })}`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </li>
            </ul>

            <div className="pl-3">
              <SocialLinks size={22} />
            </div>
          </div>

          <button onClick={openMobileNav} className="block lg:hidden bg-transparent border-none text-2xl cursor-pointer">
             <FaHamburger spacing={30} />
          </button>
        </div>
      </nav>
      { toggleNav && <nav>
        <MobileNav closeMobileNav={closeMobileNav} pathname={pathname}/>
      </nav> }
    </>
  );
}
