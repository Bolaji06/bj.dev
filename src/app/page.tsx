import BlogCard from "@/components/BlogCard/BlogCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { fetchBlogPost } from "@/data/fetchBlogPosts";
import { IBlog } from "@/definition/definition";
import { IoLogoWechat } from "react-icons/io5";

export default async function Home() {
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
            <p className="text-xs text-gray-400">
              View projects I have done in the past which best represent my
              talent.
            </p>
          </div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>

        <section className="py-10">
          <header className="mx-auto w-full text-center py-10">
            <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
            <p className="text-sm py-6 text-gray-400">
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

        <div className="w-full h-[1px] bg-gray-800 mx-auto mt-36" />
        <section className="py-20">
          <header id="contact" className="mx-auto scroll-mt-24">
            <div className="flex item-center justify-center gap-6 text-text_primary">
              <IoLogoWechat size={35} />
              <h1 className="text-3xl font-semibold">{"Let's Chat"}</h1>
            </div>
            <div className="py-10 max-w-md mx-auto">
                <p className="text-center text-sm text-gray-400">
                  Contact me about any work opportunities, projects, questions
                  or feedback you may have. Even if you just want to say hi. I
                  always reply within 24 hours, usually even faster!
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
