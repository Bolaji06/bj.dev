import ContactForm from "@/components/ContactForm/ContactForm";
import FloatingButton from "@/components/FloatingButton/FloatingButton";
import { getUserById } from "@/data/fetchUser";
import { IUserResponse } from "@/definition/definition";
import Image from "next/image";
import { IoLogoWechat } from "react-icons/io5";

import TestMdx from "@/app/test-page/page.mdx"

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

        <div className="py-10 mb-20 mx-auto text-center">
            <p>
                {userInfo.bio}
            </p>

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

    <TestMdx />
    </>
  );
}
