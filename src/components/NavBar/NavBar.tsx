"use client";

import logo from "../../../public/logo.png";
import Link from "next/link";
import { navLinks } from "@/utils/links";
import SocialLinks from "../SocialLinks/SocialLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaHamburger } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";
import { useState } from "react";
import Logo from "../Logo/Logo";


export default function NavBar() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  function openMobileNav() {
    setToggleNav(true);
  }

  function closeMobileNav() {
    setToggleNav(false);
  }
  const pathname = usePathname();

  return (
    <>
      <nav
        data-testid="navbar-lg"
        className="fixed w-full py-3 px-4 sm:px-10 backdrop-blur-md bg-background/90 border-b border-border"
      >
        <div className="flex justify-between">
          <Link href={"/"} prefetch={true}>
            <Logo className="aspect-video" src={logo} />
          </Link>

          <div className="hidden lg:flex justify-between items-center">
            <ul className="border-r border-gray-700">
              <li className="flex items-center gap-8 last:mr-5">
                {navLinks.map((link) => {
                  const isActive = (pathname === "/" && link.href === "/") ||
                  (pathname.startsWith(link.href) && link.href !== "/")
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      prefetch={true}
                      className={`text-sm font-medium text-foreground hover:text-primary-brand
                         ${clsx({
                          "text-primary-brand font-medium border-b-2 border-primary-brand":
                            isActive
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

          <button
            onClick={openMobileNav}
            className="block lg:hidden bg-transparent border-none text-2xl cursor-pointer"
          >
            <FaHamburger spacing={30} />
          </button>
        </div>
      </nav>
      {toggleNav && (
        <nav
          className={`fixed z-50 min-h-screen w-full overflow-y-hidden
        transition-transform duration-300 ease-in-out`}
        >
          <MobileNav closeMobileNav={closeMobileNav} pathname={pathname} />
        </nav>
      )}
    </>
  );
}
