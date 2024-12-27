import { deleteBugBuster } from "@/actions/admin/bugBusterAction";
import BugBusterForm from "@/components/admin/BugBuster/BugBusterForm";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import AdminCardBug from "@/components/ui/AdminCardBug";
import { getBugBusterList } from "@/data/fetchBugBuster";
import { IBugBusterListResponse } from "@/definition/definition";

export default async function AdminBugBusterPage() {
  const bugBusters: IBugBusterListResponse = await getBugBusterList();

  const bugBusterList = bugBusters.bugList;

  return (
    <>
      <section className="py-12">
        <header>
          <AdminHeaderTitle title="Add Bug Buster" />
        </header>

        <div>
          <BugBusterForm />
        </div>

        <section className="py-6 flex items-center gap-2 w-full max-w-4xl overflow-auto">
          {bugBusterList.map((bug) => {
            return (
              <div key={bug.id}>
                <AdminCardBug
                  title={bug.title}
                  id={bug.id}
                  action={deleteBugBuster}
                  baseHref="bug-buster"
                />
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}
