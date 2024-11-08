import PageContent from "@/components/admin/PageContent";
import { getUser } from "@/data/fetchUser";
import { IUserResponse } from "@/definition/definition";

export default async function AdminPage() {
  const userData: IUserResponse = await getUser();

  return (
    <>
      <main className="py-14">
        <PageContent user={userData.user} />
      </main>
    </>
  );
}
