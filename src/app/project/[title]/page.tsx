import { getProject } from "@/data/fetchProject";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/definition/definition";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ title: string }>;
}): Promise<Metadata> {
  const param = await params;
  const title = param.title;
  const decodeTitle = decodeURIComponent(title);

  const response: Project = await getProject(decodeTitle);
  const project = response.project;

  return {
    title: `bj.dev Project | ${project.title}`,
    description: `${project.description}`,
    keywords: [`bj.dev project, ${project.title}`, `${project.description}`],

    openGraph: {
      title: `${project.title}`,
      description: `bj.dev Project | ${project.description}`,
      type: "profile",
      url: `https://bjdev.vercel.app/project/${project.title}`,
      images: [
        {
          url: `${project.thumbnail}`,
          width: 1024,
          height: 576,
          alt: `${project.title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "bj.dev",
      creator: "Bolaji Bolajoko",
      title: `bj.dev Project | ${project?.title}`,
      description: `${project?.description}`,

      images: [
        {
          url: `${project?.thumbnail}`,
          width: 1024,
          height: 576,
          alt: `${project?.title}`,
        },
      ],
    },
    alternates: {
      canonical: `https://bjdev.vercel.app/project/${project?.title}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ title: string }>;
}): Promise<React.JSX.Element> {
  const param = await params;
  const title = param.title;
  const decodeTitle = decodeURIComponent(title);

  const response: Project = await getProject(decodeTitle);

  const project = response.project;

  return (
    <>
      <section className="py-14 px-4">
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
        <article className="prose-stone prose-h3:text-xl">
          <MDXRemote
            source={project.about as string}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
                format: "mdx",
              },
            }}
          />
        </article>
      </section>
    </>
  );
}
