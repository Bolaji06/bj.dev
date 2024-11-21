import { deleteProject } from "@/actions/admin/projectActions";
import Link from "next/link";
import FormButtonClient from "./formButton";

interface IAdminCardProps {
  title: string;
}
export default function AdminCard({ title }: IAdminCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, title);
  return (
    <>
      <div className="rounded py-2 px-2 bg-gray-800 max-w-lg">
        <div className="flex items-center gap-6">
          <Link
            className="max-w-44"
            href={`/admin/dashboard/project/edit/${title}`}
          >
            <p className="w-full truncate">{title}</p>
          </Link>

          <form action={deleteProjectWithId}>
            <FormButtonClient title="Delete" className="text-red-500 bg-transparent"/>
          </form>
        </div>
      </div>
    </>
  );
}
