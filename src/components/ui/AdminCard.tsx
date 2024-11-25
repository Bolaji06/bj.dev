/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import FormButtonClient from "./formButton";

interface IAdminCardProps {
  title: string;
  action: (title: string) => Promise<any>;
  baseHref: string
}
export default function AdminCard({ title, action, baseHref }: IAdminCardProps) {
  const deleteProjectWithId = action.bind(null, title);
  return (
    <>
      <div className="rounded py-2 px-2 bg-gray-800 max-w-lg">
        <div className="flex items-center gap-6">
          <Link
            className="max-w-44"
            href={`/admin/dashboard/${baseHref}/edit/${title}`}
          >
            <p className="w-full truncate">{title}</p>
          </Link>

          <form action={deleteProjectWithId}>
            <FormButtonClient
              title="Delete"
              className="text-red-500 bg-transparent"
            />
          </form>
        </div>
      </div>
    </>
  );
}
