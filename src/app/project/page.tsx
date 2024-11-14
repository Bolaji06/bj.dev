import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { getProjects } from "@/data/fetchProject";
import { IProjectResponse } from "@/definition/definition";

export default async function ProjectPage() {
  const response: IProjectResponse = await getProjects();
  const projects = response.projects;

  return (
    <>
      <section className="py-14 px-6">
        <header className="py-10 space-y-5">
          <h1 className="text-4xl md:text-5xl font-semibold">Projects</h1>
          <p className="text-xl md:text-2xl font-medium text-primary-brand">
            Curated list of projects have worked on
          </p>
        </header>

        <div className="py-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  stacks={project.stacks}
                  thumbnail={project.thumbnail}
                  url={project.url}
                  githubUrl={project.githubUrl}
                  gitMore="more"
                  showFooter={false}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* <div className="py-10">
        <Footer />
      </div> */}
    </>
  );
}
