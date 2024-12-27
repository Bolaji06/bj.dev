//import BugBusterList from "@/components/BugBusterList/BugBusterList";
import { fetchBugBusterList } from "@/data/fetchBugBuster";
import { IBugBusterListResponse } from "@/definition/definition";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicList = dynamic(() => import("@/components/BugBusterList/BugBusterList"));
export default async function BugBusterPage() {
  const bugBusters: IBugBusterListResponse = await fetchBugBusterList();

  const bugBusterList = bugBusters.bugList;
  return (
    <>
      <section className="py-16 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
          </div>
        </header>
        <Suspense fallback={<p>Loading...</p>}>
        { bugBusterList && 
          <DynamicList bugBusterList={bugBusterList}/>
        }
        </Suspense>
      </section>
    </>
  );
}
