"use client";

import { IBugBuster } from "@/definition/definition";
import Link from "next/link";

interface BugBusterListProps {
  bugBusterList: IBugBuster[];
}
export default function BugBusterList({ bugBusterList }: BugBusterListProps) {
  return (
    <>
      <div>
        {bugBusterList.map((bugBuster) => (
          <Link
            key={bugBuster.id}
            className="py-4 flex flex-col mt-2 border-b border-border w-full max-w-2xl font-medium hover:text-slate-500 transition-colors duration-200 ease-in-out"
            href={`/bug-buster/${bugBuster.id}`}
          >
            {bugBuster.title}
          </Link>
        ))}
      </div>
    </>
  );
}
