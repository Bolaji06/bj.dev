import { getBugBuster } from "@/data/fetchBugBuster";
import { IBugBusterResponse } from "@/definition/definition";
import { formatTimestamp } from "@/utils/utils";

export default async function BusterDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactNode> {
  const param = await params;
  const bugBusterId = param.id;

  const bugBusterData: IBugBusterResponse = await getBugBuster(bugBusterId);

  const bugBuster = bugBusterData.bug;

  const isUpdated = bugBuster?.createdAt === bugBuster?.updatedAt;

  return (
    <>
      <section className="py-14 px-4 max-w-3xl w-full">
        <header className="border-b border-border py-2">
          <h1 className="text-xl font-semibold">{bugBuster.title}</h1>
          <div>
            <div className="inline-flex gap-2">
              {bugBuster.tags.map((tag) => (
                <div key={tag} className="py-2 text-sm text-mute_foreground">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
            <div className="py-2 flex space-x-3 text-xs text-mute_foreground">
              <p className="">
                Created: <span>{formatTimestamp(bugBuster.createdAt)}</span>
              </p>
              {isUpdated && (
                <p className="">
                  Updated: <span>{formatTimestamp(bugBuster.updatedAt)}</span>
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="mt-6 border-b border-border pb-4">
          <div>
            <h2 className="text-2xl py-2 font-semibold">Backstory</h2>
          </div>
          <div>
            <p className="italic text-mute_foreground py-2">
              {bugBuster.backstory}
            </p>
          </div>
        </div>

        <div className="mt-6 border-b border-border py-4 pb-10">
          <div>
            <h2 className="py-2 text-2xl font-semibold">Busted! 🎆</h2>
          </div>
          <div>
            <p className="mb-4">{bugBuster.solution}</p>
          </div>
          <div className="ref-links text-sm py-3">
            <p className="text-mute_foreground">
              Ref links: stackoverflow, githubissues
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
