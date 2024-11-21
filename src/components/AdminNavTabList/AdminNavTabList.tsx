"use client";

import { adminTabLists } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function AdminNavTabList() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex gap-2 sm:gap-6 items-center border-b border-gray-800">
        {adminTabLists.map((tab) => {
          return (
            <div
              key={tab.name}
              className={`px-4 py-4 bg-transparent hover:bg-blue-600/5 text-text_primary text-sm hover:rounded-t-lg ${clsx(
                {
                  "bg-blue-700/50 hover:bg-blue-700/50 rounded-t-lg border-b-2  border-blue-600":
                    tab.href === pathname,
                }
              )} rounded-none`}
            >
              <Link href={tab.href} className="h-full w-full">{tab.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
