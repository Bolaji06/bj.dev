import BlogCard from "@/components/BlogCard/BlogCard";
import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { fetchBlogPost } from "@/data/fetchBlogPosts";
import { IBlog } from "@/definition/definition";

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
            <p className="text-sm py-6 text-gray-400">I explore things that fascinates me in great details</p>
          </header>
          <div className="grid lg:grid-cols-2 gap-4  pt-10">
          {
            blogPosts.map((blog: IBlog) => {
              return(
                <BlogCard 
                key={blog.id}
                id={blog.id}
                slug={blog.slug}
                title={blog.title}
                description={blog.description}
                published_at={blog.published_at}/>
              )
            })
          }
          </div>
        </section>
      </main>
    </>
  );
}
