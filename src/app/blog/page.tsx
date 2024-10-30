import BlogCard from "@/components/BlogCard/BlogCard";
import { fetchBlogPost } from "@/data/fetchBlogPosts";
import { IBlog } from "@/definition/definition";
import Link from "next/link";

export default async function Page() {
  const blogPosts = await fetchBlogPost(1, 30);

  return (
    <>
      <section className="py-20 px-6">
        <header>
          <div className="space-y-6">
            <h1 className="text-4xl text-text_primary font-semibold">
              Blog Posts
            </h1>
            <p className="max-w-lg text-text_primary">
              Posts on technology, coding, development and more. All my posts
              can also be found on
              <Link
                href={"/"}
                className="hover:text-primary-brand hover:underline px-2"
              >
                dev.to .
              </Link>
            </p>
          </div>
        </header>

        <section className="grid lg:grid-cols-2 gap-6 py-12 lg:py-20">
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
        </section>
      </section>
    </>
  );
}
