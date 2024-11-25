import { getProject } from "@/data/fetchProject";
import { Project } from "@/definition/definition";
import ProjectFormEdit from "@/components/admin/Project/EditProjectForm";

export default async function Page({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const param = await params;
  const projectTitle = param.title;

  const decodeUrlParam = decodeURIComponent(projectTitle);
  const projectDetails: Project = await getProject(decodeUrlParam);
  const project = projectDetails.project;

  return (
    <>
      <main className="py-14">
        <ProjectFormEdit {...project} />
      </main>
    </>
  );
}
