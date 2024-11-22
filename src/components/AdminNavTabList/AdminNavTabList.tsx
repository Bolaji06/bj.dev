"use client";

import { adminTabLists } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function AdminNavTabList() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center gap-2 sm:gap-6 border-b border-gray-800 py-4">
        {adminTabLists.map((tab) => {
          return (
            <div key={tab.name} className="">
              <Link
                href={tab.href}
                className={`p-4 bg-transparent hover:bg-blue-600/5 text-text_primary text-sm hover:rounded-t-lg ${clsx(
                  {
                    "bg-blue-700/60 hover:bg-blue-700/50 rounded-t-lg border-b-2  border-blue-600":
                      tab.href === pathname,
                  }
                )} rounded-none`}
              >
                {tab.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
