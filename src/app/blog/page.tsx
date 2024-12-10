import BlogCard from "@/components/BlogCard/BlogCard";
import Footer from "@/components/Footer/Footer";
import { fetchAllBlogPosts } from "@/data/fetchBlogPosts";
import { IBlog } from "@/definition/definition";
import Link from "next/link";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog Post Lists",
  description: "Lists of all blog post by Bolaji Bolajoko",
  keywords: ["bj.dev blog posts", "Bolaji Bolajoko blog posts"],
  openGraph: {
    url: "https://bjdev.vercel.app/blog",
    type: "website",
    title: "bj.dev | Blog posts from Bolaji Bolajoko",
    description: "Curated lists of blog posts from Bolaji Bolajoko",
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
    title: "bj.dev | Blog Post Lists",
    description: "Curated lists of all blog posts from Bolaji Bolajoko",
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

export default async function Page() {
  const blogPosts = await fetchAllBlogPosts(1, 30);

  return (
    <>
      <section className="py-20 px-6">
        <header>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold">Blog Posts</h1>
            <p className="text-xl md:text-2xl font-medium text-primary-brand max-w-lg">
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
      <footer className="py-6 footer">
        <Footer />
      </footer>
    </>
  );
}
