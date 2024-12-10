import { fredoka } from "@/app/fonts/font";
import Button from "../Button/Button";

import { IoDocumentText, IoMail } from "react-icons/io5";
import { HiBriefcase } from "react-icons/hi2";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section>
        <div className="py-10 mt-6 max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold md:leading-[4rem]">
            Hi, I am{" "}
            <span
              className={`${fredoka.className} bg-gradient-to-t from-gradientRed via-gradientOrange to-yellow-500 bg-clip-text text-transparent`}
            >
              Bolaji Bolajoko
            </span>{" "}
            fullstack web{" "}
            <span className="text-gradientOrange">developer.</span>
          </h1>
          <p className="py-6">
            I design and create{" "}
            <span className="text-sky-500">
              functional and beautiful applications
            </span>{" "}
            with passion and a focus on{" "}
            <span className="text-sky-500">user experience</span> and{" "}
            <span className="text-sky-500">high quality.</span>
          </p>

          <div className="flex flex-col md:flex-row w-full gap-3 mt-2 py-4">
            <Button className="w-full px-0 md:w-40 text-white hover:bg-opacity-65">
              <Link
                href={"./assets/bolaji_bolajoko_resume.pdf"}
                download
                className="w-full flex gap-1 justify-center items-center"
              >
                <IoDocumentText size={20} />
                Resume
              </Link>
            </Button>
            <Button className="w-full px-0 md:w-40 text-text_primary bg-transparent hover:bg-sky-100/10 border border-secondary">
              <Link
                href={"#contact"}
                download
                className="w-full flex gap-1 justify-center items-center"
              >
                <IoMail size={20} /> Contact Me
              </Link>
            </Button>
            <Button className="hidden md:inline-flex text-text_primary bg-transparent hover:bg-slate-100/15">
              <Link
                href={"/project"}
                download
                className="w-full flex gap-2 scroll-smooth justify-center items-center"
              >
                <HiBriefcase size={20} /> My Works
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
