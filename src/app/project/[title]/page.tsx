import { getProject } from "@/data/fetchProject";

import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Project } from "@/definition/definition";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next/types";

import rehypePrettyCode from "rehype-pretty-code";
import Footer from "@/components/Footer/Footer";

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

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: "github-dark-high-contrast",
    light: "github-light",
  },
  keepBackground: true,
  defaultLang: {
    inline: "plaintext",
    block: "javascript",
  },
};
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
        <article className="px-3 prose-stone prose-h1:text-3xl prose-code:p-2 prose-h1:font-bold prose-h3:text-xl prose-h3:font-bold prose-h1:mb-4 prose-h3:mb-3 prose-p:mb-3 prose-ul:list-disc">
          <MDXRemote
            source={project.about as string}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [[rehypePrettyCode, options]],
                format: "mdx",
              },
            }}
          />
        </article>
      </section>
      <footer className="py-6 footer">
        <Footer />
      </footer>
    </>
  );
}
