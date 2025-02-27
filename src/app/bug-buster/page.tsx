import { fetchBugBusterList } from "@/data/fetchBugBuster";
import { IBugBusterListResponse } from "@/definition/definition";
import Link from "next/link";

import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "bj.dev: Bug Buster List",
  description: "bj.dev: Errors and Solution",
  keywords: [
    "bj.dev",
    "Bolaji",
    "Bolajoko",
    "Portfolio",
    "About Bolaji Bolajoko",
    "My Portfolio",
    "Bug Buster",
    "Errors and solution",
    "Bolaji Bolajoko",
    "Web developer",
    "Frontend developer",
    "Backend developer",
    "Full stack Web developer",
  ],
  openGraph: {
    url: "https://bjdev.vercel.app/project",
    type: "website",
    title: "bj.dev: List Errors/Bugs",
    description: "bj.dev: List of Bug/Errors and how I solved them",
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
    title: "bj.dev: List Errors",
    description: "bj.dev: List of Bug/Errors and how I solved them",
    creator: "bj.dev",
    site: "bj.dev",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "bj.dev: Bolaji Bolajoko Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://bjdev.vercel.app",
  },
};

export default async function BugBusterPage() {
  const bugBusterResponse: IBugBusterListResponse = await fetchBugBusterList();
  const bugBusterList = bugBusterResponse.bugList;

  return (
    <>
      <section className="py-16 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
            <div>
              {bugBusterList.map((bugBuster) => (
                <Link
                  key={bugBuster.id}
                  prefetch={true}
                  className="py-4 flex flex-col mt-2 border-b border-border w-full max-w-2xl font-medium hover:text-slate-500 transition-colors duration-200 ease-in-out"
                  href={`/bug-buster/${bugBuster.id}`}
                >
                  {bugBuster.title}
                </Link>
              ))}
            </div>
          </div>
        </header>
      </section>
    </>
  );
}
