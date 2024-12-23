import BugBusterForm from "@/components/admin/BugBuster/BugBusterForm";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";

export default function AdminBugBuster() {
  return (
    <>
      <section className="py-12">
        <header>
         <AdminHeaderTitle title="Add Bug Buster"/>
        </header>

        <div>
            <BugBusterForm />
        </div>
      </section>
    </>
  );
}
