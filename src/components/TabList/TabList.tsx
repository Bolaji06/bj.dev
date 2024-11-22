"use client";

import { tabLists } from "@/utils/links";
import Button from "../Button/Button";
import clsx from "clsx";

interface ITabListProps {
  tabName: string;
  setTabList: (curState: string) => void;
}
export default function TabList({ tabName, setTabList }: ITabListProps) {
  function toggleTabList(tab: string) {
    setTabList(tab);
  }

  return (
    <>
      <nav className="py-14">
        <div className="flex gap-2 sm:gap-6 items-center border-b border-gray-800">
          {tabLists.map((tab) => {
            return (
              <Button
                onClick={() => toggleTabList(tab)}
                key={tab}
                className={`h-6 bg-transparent hover:bg-blue-600/5 text-text_primary text-sm hover:rounded-t-lg ${clsx(
                  {
                    "bg-blue-700/50 hover:bg-blue-700/50 rounded-t-lg border-b-2  border-blue-600":
                      tab === tabName,
                  }
                )} rounded-none`}
              >
                {tab}
              </Button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
