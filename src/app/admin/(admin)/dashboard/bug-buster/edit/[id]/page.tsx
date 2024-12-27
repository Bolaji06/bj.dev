import EditBugBusterForm from "@/components/admin/BugBuster/EditBugBusterForm";
import { getBugBuster } from "@/data/fetchBugBuster";

export default async function EditBugBusterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const paramId = param.id;

  const bugBusterResponse = await getBugBuster(paramId);
  const bugBuster = bugBusterResponse.bug;

  return (
    <>
      <main className="py-14">
        <EditBugBusterForm {...bugBuster} />
      </main>
    </>
  );
}
