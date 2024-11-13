import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoMongodb,
} from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiZod,
  SiExpress,
  SiPrisma,
  SiVite,
  SiHono,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IconType } from "react-icons/lib";

export const stackIcons: Record<string, IconType> = {
  TypeScript: BiLogoTypescript,
  Nextjs: RiNextjsFill,
  Reactjs: BiLogoReact,
  Clerk: SiClerk,
  PayStack: RiSecurePaymentFill,
  TailwindCSS: RiTailwindCssFill,
  MongoDB: BiLogoMongodb,
  JavaScript: BiLogoJavascript,
  Zod: SiZod,
  Expressjs: SiExpress,
  Prisma: SiPrisma,
  Vercel: SiVercel,
  Render: SiRender,
  Vite: SiVite,
  Honojs: SiHono,
};
