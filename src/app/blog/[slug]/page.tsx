import { getBlogPost } from "@/data/fetchBlogPosts";
import { TfiWrite } from "react-icons/tfi";
import { IoMdTime } from "react-icons/io";
import { MdLogoDev } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";
import { IBlogPostDetails } from "@/definition/definition";
import Link from "next/link";

import { robotoMono } from "@/app/fonts/font";
import { formatTimestamp } from "@/utils/utils";


export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}): Promise<React.JSX.Element> {

  const blogSlug = await params;
  const { slug } = blogSlug;

  const blogPostData: IBlogPostDetails = await getBlogPost(slug);



  return (
    <>
      <section className="py-20 px-10">
        <header className="space-y-5">
          <h1 className="text-4xl text-text_primary font-semibold max-w-lg leading-[3rem]">{blogPostData.title}</h1>
          <div className="text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <TfiWrite />
              <p className="">
                Published: <span>{formatTimestamp(blogPostData.published_at)}</span>
              </p>
            </div>
            <div className="flex items-center flex-wrap gap-6 text-gray-300 py-4">
                <p className="inline-flex items-center gap-2"><IoMdTime /> <span className="">{blogPostData.reading_time_minutes} mins</span></p>
                <Link href={blogPostData.url} className="inline-flex items-center gap-2 hover:underline"><MdLogoDev /> <span className=""> Read on dev.to</span></Link>
                <p className="inline-flex items-center gap-2"><MdOutlineAddReaction /> <span className="">{blogPostData.public_reactions_count} reactions</span></p>
            </div>
          </div>
        </header>

        <article className={`${robotoMono.className} text-lg max-w-3xl overflow-x-hidden leading-[2rem] antialiased mb-20`} dangerouslySetInnerHTML={{ __html: blogPostData.body_html}}>

        </article>
      </section>
    </>
  );
}
