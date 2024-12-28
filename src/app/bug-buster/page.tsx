import { fetchBugBusterList } from "@/data/fetchBugBuster";
import { IBugBusterListResponse } from "@/definition/definition";
import Link from "next/link";

export default async function BugBusterPage() {
  const bugBusterResponse: IBugBusterListResponse = await fetchBugBusterList();
  const bugBusterList = bugBusterResponse.bugList;

  return (
    <>
      <section className="py-16 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
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
          </div>
        </header>
      </section>
    </>
  );
}
