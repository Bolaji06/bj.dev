import { fetchBugBusterList } from "@/data/fetchBugBuster";
import { IBugBusterListResponse } from "@/definition/definition";
import Link from "next/link";

export default async function BugBusterList() {
  const bugBusters: IBugBusterListResponse = await fetchBugBusterList();

  const bugBusterList = bugBusters.bugList;

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
