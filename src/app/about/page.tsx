import ContactForm from "@/components/ContactForm/ContactForm";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import { getUserById } from "@/data/fetchUser";
import { IUserResponse } from "@/definition/definition";
import Image from "next/image";
import { IoLogoWechat } from "react-icons/io5";
import { Metadata } from "next/types";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "About Me",
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
    url: "https://bjdev.vercel.app/about",
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

export default async function Page() {
  const user: IUserResponse = await getUserById();
  const userInfo = user.user;

  return (
    <>
      <section className="py-14 px-6">
        <header className="py-6">
          <div className="py-2">
            <h1 className="text-4xl md:text-5xl font-semibold">About Me</h1>
          </div>
        </header>

        <div className="py-10">
          <div className="flex gap-5 justify-center items-center">
            <div className="px-4">
              <Image
                src={userInfo.photo}
                width={1000}
                height={1000}
                alt={userInfo.name + "profile image"}
                className="rounded-full w-full max-w-xs object-cover  aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="py-10 mb-20 mx-auto prose-p:mb-4 prose-h1:text-3xl prose-h2:text-2xl prose-h1:mb-4 prose-h1:font-bold">
          <MDXRemote source={userInfo.bio} />
        </div>

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
      </section>
    </>
  );
}
