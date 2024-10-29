import { fredoka } from "@/app/fonts/font";
import Button from "../Button/Button";

import { IoDocumentText, IoMail } from "react-icons/io5";
import { HiBriefcase } from "react-icons/hi2";

export default function Hero() {
  return (
    <>
      <section>
        <div className="py-10 mt-6 max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold md:leading-[4rem]">
            Hi, I am{" "}
            <span
              className={`${fredoka.className}  bg-gradient-to-t from-gradientRed via-gradientOrange to-yellow-500 bg-clip-text text-transparent`}
            >
              Bolaji Bolajoko
            </span>{" "}
            fullstack web{" "}
            <span className="text-gradientOrange">developer.</span>
          </h1>
          <p className="py-6">
            I design and create{" "}
            <span className="text-sky-300">
              functional and beautiful applications
            </span>{" "}
            with passion and a focus on{" "}
            <span className="text-sky-300">user experience</span> and{" "}
            <span className="text-sky-300">high quality.</span>
          </p>

          <div className="flex flex-col md:flex-row w-full gap-3 mt-2 py-4">
            <Button className="w-full md:w-40 inline-flex hover:bg-opacity-65">
               <IoDocumentText size={20}/> Resume
            </Button>
            <Button className="w-full md:w-40 inline-flex bg-transparent hover:bg-sky-100/10 border border-secondary">
               <IoMail size={20}/> Contact Me
            </Button>
            <Button className="hidden md:inline-flex bg-transparent hover:bg-slate-100/15">
               <HiBriefcase size={20}/> My Works
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
