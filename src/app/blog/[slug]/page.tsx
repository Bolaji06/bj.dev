import { getBlogPost } from "@/data/fetchBlogPosts";
import { TfiWrite } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { MdLogoDev } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";
import { IBlogPostDetails } from "@/definition/definition";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import { robotoMono } from "@/app/fonts/font";
import { formatTimestamp } from "@/utils/utils";
import { Metadata } from "next/types";
import Footer from "@/components/Footer/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blogSlug = await params;
  const { slug } = blogSlug;

  const blogPostData: IBlogPostDetails = await getBlogPost(slug);

  return {
    title: `${blogPostData.title}`,
    description: `${blogPostData.description}`,
    keywords: ["bj.dev blog", blogPostData.title, blogPostData.description],

    openGraph: {
      title: `${blogPostData.title}`,
      description: `bj.dev blog | ${blogPostData.description}`,
      type: "article",
      url: `https://bjdev.vercel.app/project/${blogPostData.title}`,
      images: [
        {
          url: ``,
          width: 1024,
          height: 576,
          alt: `${blogPostData?.title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "bj.dev",
      creator: "Bolaji Bolajoko",
      title: `bj.dev Project | ${blogPostData?.title}`,
      description: `${blogPostData?.description}`,

      images: [
        {
          url: ``,
          width: 1024,
          height: 576,
          alt: `${blogPostData.title}`,
        },
      ],
    },
    alternates: {
      canonical: `https://bjdev.vercel.app/blog/${blogPostData.title}`,
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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<React.JSX.Element> {
  const blogSlug = await params;
  const { slug } = blogSlug;

  const blogPostData: IBlogPostDetails = await getBlogPost(slug);

  return (
    <>
      <section className="py-20 px-4 md:px-10">
        <header className="space-y-5">
          <h1 className="text-4xl text-text_primary font-semibold max-w-lg leading-[3rem]">
            {blogPostData.title}
          </h1>
          <div className="text-sm text-mute-foreground">
            <div className="flex items-center gap-2 text-mute_foreground">
              <TfiWrite />
              <p>
                Published:{" "}
                <span>{formatTimestamp(blogPostData.published_at)}</span>
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-6 py-4">
              <p className="inline-flex items-center gap-2 text-mute_foreground">
                <IoMdTime />{" "}
                <span className="">
                  {blogPostData.reading_time_minutes} mins
                </span>
              </p>
              <Link
                href={blogPostData.url}
                className="inline-flex items-center gap-2 hover:underline text-mute_foreground"
              >
                <MdLogoDev /> <span className=""> Read on dev.to</span>
              </Link>
              <p className="inline-flex items-center gap-2 text-mute_foreground">
                <MdOutlineAddReaction />{" "}
                <span className="">
                  {blogPostData.public_reactions_count} reactions
                </span>
              </p>
            </div>
          </div>
        </header>

        <article
          className={`${robotoMono.className} text-lg w-full max-w-3xl overflow-x-hidden leading-[1.8rem] antialiased mb-20
          prose-p:my-4 prose-code:my-1 prose-blockquote:bg-gray-800 prose-blockquote:p-2 prose-blockquote:rounded-sm prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-xl prose-headings:py-2 prose-headings:font-bold`}
        >
          <MDXRemote
            source={blogPostData.body_markdown}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [[rehypePrettyCode, options]],
                format: "mdx",
              },
            }}
          />
        </article>
        <div className="py-8">
          <p className="text-center text-gray-700 text-sm">THE END</p>
        </div>
      </section>
      <footer className="py-6 footer">
        <Footer />
      </footer>
    </>
  );
}
