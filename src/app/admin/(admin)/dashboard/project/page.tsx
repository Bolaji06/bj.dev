import { deleteProject } from "@/actions/admin/projectActions";
import ProjectForm from "@/components/admin/Project/ProjectForm";
import AdminCard from "@/components/ui/AdminCard";
import { getProjects } from "@/data/fetchProject";
import { IProjectResponse } from "@/definition/definition";

export default async function Page() {
  const projectsData: IProjectResponse = await getProjects();

  return (
    <>
      <main className="py-14">
        <section>
          <ProjectForm />
        </section>

        <section className="py-6 flex items-center gap-2 w-full max-w-4xl overflow-auto">
          {projectsData.projects.map((project) => {
            return (
              <div key={project.id}>
                <AdminCard
                 title={project.title}
                 action={deleteProject} />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
