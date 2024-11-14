import { getProject } from "@/data/fetchProject";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/definition/definition";
import Footer from "@/components/Footer/Footer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ title: string }>
}): Promise<React.JSX.Element> {
  const param = await params;
  const title = param.title;
  const decodeTitle = decodeURIComponent(title);

  const response: Project = await getProject(decodeTitle);

  const project = response.project;

  return (
    <>
      <section className="py-14">
        <header className="py-6">
          <ProjectCard
            title={project.title}
            description={project.description}
            stacks={project.stacks}
            thumbnail={project.thumbnail}
            url={project.url}
            githubUrl={project.githubUrl}
            gitMore="git"
          />
        </header>
        <article>{project.about}</article>
      </section>

      <div className="py-10">
        <Footer />
      </div>
    </>
  );
}
