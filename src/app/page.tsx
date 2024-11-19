import BlogCard from "@/components/BlogCard/BlogCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { fetchBlogPost } from "@/data/fetchBlogPosts";
import { getProjects } from "@/data/fetchProject";
import { IBlog, IProject, IProjectResponse } from "@/definition/definition";
import { Metadata } from "next/types";
import { IoLogoWechat } from "react-icons/io5";

export const metadata: Metadata = {
  title: "bj.dev: Bolaji Bolajoko",
  description:
    "bj.dev: I am Bolaji Bolajoko, Full-stack Software developer. I design and create functional web apps, with a focus of good user experience",
  keywords: [
    "bj.dev",
    "Bolaji",
    "Bolajoko",
    "Portfolio",
    "About Bolaji Bolajoko",
    "My Portfolio",
    "Hire Full-stack Web developer",
    "Hire Software developer",
    "Bolaji Bolajoko",
    "Web developer",
    "Frontend developer",
    "Backend developer",
    "Full stack Web developer",
  ],
  openGraph: {
    url: "https://bjdev.vercel.app",
    type: "website",
    title: "bj.dev | Bolaji Bolajoko Portfolio",
    description:
      "bj.dev: I am Bolaji Bolajoko, Full-stack Software developer. I design and create functional web apps, with a focus of good user experience",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "bj.dev | Bolaji Bolajoko Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bj.dev | Bolaji Bolajoko Portfolio",
    description:
      "bj.dev: I am Bolaji Bolajoko, Full-stack Software developer. I design and create functional web apps, with a focus of good user experience",
    creator: "bj.dev",
    site: "bj.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "bj.dev | Bolaji Bolajoko Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://bjdev.vercel.app",
  },
};

export default async function Home() {
  const projects: IProjectResponse = await getProjects();
  const blogPosts = await fetchBlogPost(1, 4);

  return (
    <>
      <main className="px-6">
        <section className="min-h-screen py-14">
          <Hero />
        </section>

        <section className="w-full space-y-14">
          <div className="space-y-5 mx-auto w-full text-center">
            <h1 className="font-semibold text-3xl text-text_primary">
              Recent Projects
            </h1>
            <p className="text-sm text-gray-500">
              View projects I have done in the past which best represent my
              talent.
            </p>
          </div>
          {projects.projects.map((project: IProject) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                url={project.url}
                stacks={project.stacks}
                thumbnail={project.thumbnail}
                gitMore="more"
                githubUrl={project.githubUrl}
              />
            );
          })}
        </section>

        <section className="py-10">
          <header className="mx-auto w-full text-center py-10">
            <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
            <p className="text-sm py-6 text-gray-500">
              I explore things that fascinates me in great details
            </p>
          </header>
          <div className="grid lg:grid-cols-2 gap-4  pt-10">
            {blogPosts.map((blog: IBlog) => {
              return (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  slug={blog.slug}
                  title={blog.title}
                  description={blog.description}
                  published_at={blog.published_at}
                />
              );
            })}
          </div>
        </section>

        <div className="w-full h-[1px] bg-border mx-auto mt-36" />
        <section className="py-20">
          <header id="contact" className="mx-auto scroll-mt-24">
            <div className="flex item-center justify-center gap-6">
              <IoLogoWechat size={35} />
              <h1 className="text-3xl font-semibold text-text_primary">
                {"Let's Chat"}
              </h1>
            </div>
            <div className="py-10 max-w-md mx-auto">
              <p className="text-center text-sm text-gray-500 leading-relaxed">
                Contact me about any work opportunities, projects, questions or
                feedback you may have. Even if you just want to say hi. I always
                reply within 24 hours, usually even faster!
              </p>
            </div>
          </header>
          <div className="max-w-xl mx-auto mt-14 mb-10">
            <ContactForm />
          </div>
        </section>

        <FloatingButton />
      </main>
    </>
  );
}
