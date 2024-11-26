import { socialLinks } from "@/utils/links";
import Link from "next/link";

interface SocialLinksProps {
  className?: string;
  size?: number;
}
export default function SocialLinks({
  className,
  size,
}: SocialLinksProps) {
  return (
    <>
      <div className={`${className} flex items-center gap-5 text-text_primary`}>
        {socialLinks.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`text-text_primary`}
              target="_blank"
            >
              {<item.icon size={size} />}
            </Link>
          );
        })}
      </div>
    </>
  );
}
