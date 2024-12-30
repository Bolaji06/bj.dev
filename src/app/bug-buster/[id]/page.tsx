import { getBugBuster } from "@/data/fetchBugBuster";
import { IBugBusterResponse } from "@/definition/definition";

import { formatTimestamp } from "@/utils/utils";
import { Metadata } from "next/types";

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const param = await params;
  const paramId = param.id;

  const response: IBugBusterResponse = await getBugBuster(paramId);
  const bugBuster = response.bug;

  return {
    title: `bj.dev Bug Buster | ${bugBuster.title}`,
    description: `${bugBuster.backstory}`,
    keywords: [`bj.dev Bug Buster, ${bugBuster.title}`, `${bugBuster.backstory}`, bugBuster.tags[0]],

    openGraph: {
      title: `${bugBuster.title}`,
      description: `bj.dev: Bug Buster | ${bugBuster.backstory}`,
      type: "profile",
      url: `https://bjdev.vercel.app/bug-buster/${bugBuster.title}`,
      images: [
        {
          url: "",
          width: 1024,
          height: 576,
          alt: `${bugBuster.title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "bj.dev",
      creator: "Bolaji Bolajoko",
      title: `bj.dev: Bug Buster | ${bugBuster?.title}`,
      description: `${bugBuster?.backstory}`,

      images: [
        {
          url: "",
          width: 1024,
          height: 576,
          alt: `${bugBuster?.title}`,
        },
      ],
    },
    alternates: {
      canonical: `https://bjdev.vercel.app/bug-buster/${bugBuster?.title}`,
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

export default async function BusterDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<React.ReactNode> {
  const param = await params;
  const bugBusterId = param.id;

  const bugBusterData: IBugBusterResponse = await getBugBuster(bugBusterId);

  const bugBuster = bugBusterData.bug;

  const isUpdated = bugBuster?.createdAt === bugBuster?.updatedAt;

  return (
    <>
      <section className="py-14 px-4 max-w-3xl w-full">
        <header className="border-b border-border py-2">
          <h1 className="text-2xl font-semibold">{bugBuster.title}</h1>
          <div>
            <div className="inline-flex gap-2">
              {bugBuster.tags.map((tag) => (
                <div key={tag} className="py-2 text-xs text-mute_foreground">
                  <p>{tag}</p>
                </div>
              ))}
            </div>
            <div className="py-2 flex space-x-3 text-xs text-mute_foreground">
              <p className="">
                Created: <span>{formatTimestamp(bugBuster.createdAt)}</span>
              </p>
              {isUpdated && (
                <p className="">
                  Updated: <span>{formatTimestamp(bugBuster.updatedAt)}</span>
                </p>
              )}
            </div>
          </div>
        </header>

        <div className="mt-6 border-b border-border pb-4">
          <div>
            <h2 className="text-2xl py-2 font-semibold">Backstory</h2>
          </div>
          <article
          className={`text-lg w-full max-w-3xl overflow-x-hidden leading-[1.8rem] antialiased mb-20
          prose-p:my-4 prose-code:my-1 prose-blockquote:bg-gray-800 prose-blockquote:p-2 prose-blockquote:rounded-sm prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-xl prose-headings:py-2 prose-headings:font-bold`}
        >
          <MDXRemote
            source={bugBuster.backstory as string}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [[rehypePrettyCode, options]],
                format: "mdx",
              },
            }}
          />
        </article>
        </div>

        <div className="mt-6 border-b border-border py-4 pb-10">
          <div>
            <h2 className="py-2 text-2xl font-semibold">Busted! 🎆</h2>
          </div>
          <article
          className={`text-lg w-full max-w-3xl overflow-x-hidden leading-[1.8rem] antialiased mb-20
          prose-p:my-4 prose-code:my-1 prose-blockquote:bg-gray-800 prose-blockquote:p-2 prose-blockquote:rounded-sm prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-xl prose-headings:py-2 prose-headings:font-bold`}
        >
          <MDXRemote
            source={bugBuster.solution as string}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [[rehypePrettyCode, options]],
                format: "mdx",
              },
            }}
          />
        </article>
          <div className="ref-links text-sm py-3">
            {/* <p className="text-mute_foreground">
              Ref links: stackoverflow, githubissues
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
