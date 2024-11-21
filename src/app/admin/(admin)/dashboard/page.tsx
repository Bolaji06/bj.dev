import UserForm from "@/components/admin/User/UserForm";
import { getUser } from "@/data/fetchUser";
import { IUserResponse } from "@/definition/definition";

export default async function AdminPage() {
  const userData: IUserResponse = await getUser();

  return (
    <>
      <main className="py-14">
        <UserForm user={userData.user}/>
      </main>
    </>
  );
}
