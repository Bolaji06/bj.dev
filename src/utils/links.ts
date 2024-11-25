export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "My Work",
    href: "/project",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "My Tools",
    href: "/tools",
  },
];

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialLinks = [
  {
    title: "Github",
    href: "https://github.com/Bolaji06",
    icon: IoLogoGithub,
  },
  {
    title: "X",
    href: "https://x.com/bj_dev03",
    icon: FaSquareXTwitter,
  },
  {
    title: "Linkedln",
    href: "https://www.linkedin.com/in/bolaji-bolajoko-0a5b70308/",
    icon: IoLogoLinkedin,
  },
];

export const tabLists = ["User", "Project", "Experience"];
export const adminTabLists = [
  {
    name: "User",
    href: '/admin/dashboard'
  },
  {
    name: "Project",
    href: "/admin/dashboard/project",
  },
  {
    name: "Experience",
    href: "/admin/dashboard/experience"
  }
]
