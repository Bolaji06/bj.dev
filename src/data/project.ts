import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";

export const myProjectsData = [
  {
    title: "Organi",
    description: "Organi is a one stop e-commerce store",
    stack: [
      {
        tool: "TypeScript",
        icon: BiLogoTypescript,
      },
      {
        tool: "TailwindCSS",
        icon: RiTailwindCssFill,
      },
      {
        tool: "React",
        icon: BiLogoReact,
      },
      {
        tool: "Next.js",
        icon: RiNextjsFill,
      },
      {
        tool: "Clerk",
        icon: SiClerk,
      },
      {
        tool: "Paystack",
        icon: RiSecurePaymentFill,
      }
    ],
    live: "https://organi.com",
  },
];
