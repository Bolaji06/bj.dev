import Image from "next/image";

import Button from "../Button/Button";
import { ArrowRight, GlobeIcon } from "lucide-react";
import Link from "next/link";

import { stackIcons } from "@/data/project";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  url: string;
  stacks: string[];
  gitMore: "git" | "more";
  showFooter?: boolean;
}
export default function ProjectCard({
  title,
  description,
  thumbnail,
  url,
  githubUrl,
  stacks,
  gitMore = "more",
  showFooter = true,
}: ProjectCardProps) {
  const stackLists = stacks.map((stack) => stack.split(","))[0];

  return (
    <>
      <section className="w-full mb-12 mt-3" data-testid="ProjectCardContainer">
        <div
          className="w-full rounded-lg"
          data-testid="ProjectCardImageWrapper"
        >
          <Image
            src={thumbnail}
            alt="Organi project thumbnail image"
            width={1000}
            height={1000}
            className="w-full rounded-lg"
            data-testid="ProjectCardThumbnail"
          />
        </div>

        <div className="pt-6 pb-3" data-testid="ProjectCardTitleContainer">
          {showFooter ? (
            <h2
              className="font-semibold text-text_primary text-lg"
              data-testid="ProjectCardTitle"
            >
              {title}
            </h2>
          ) : (
            <Link
              href={`/project/${title}`}
              className="font-semibold text-text_primary text-lg underline hover:text-primary-brand cursor-pointer"
            >
              {title}
            </Link>
          )}
          <p
            className="py-3 text-sm text-gray-500 max-w-lg text-wrap truncate"
            data-testid="ProjectCardDescription"
          >
            {description}
          </p>
        </div>
        <div className="py-2 max-w-xl">
          <ul
            className="flex items-center flex-wrap gap-3 text-xs"
            data-testid="ProjectCardToolsWrapper"
          >
            {stackLists.map((item, index) => {
              const Icons = stackIcons[item];
              return (
                <li
                  key={index}
                  className="text-xs flex gap-3 items-center"
                  data-testid="ProjectCardToolsList"
                >
                  <p className="flex items-center">
                    {Icons && <Icons size={12} />}
                    {/* <BiLogoTypescript /> */}
                    <span className="px-1">{item}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {showFooter && (
          <div
            data-testid="ProjectCardFooter"
            className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center pt-6 pb-6 md:pb-14"
          >
            <Button className="px-0 bg-primary-brand text-white text-sm font-medium text-center">
              {gitMore === "more" ? (
                <Link
                  href={`project/${title}`}
                  className="w-full inline-flex gap-2 justify-center items-center px-4 py-3 text-center"
                  data-testid="ProjectCardReadMoreLink"
                >
                  Read more
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <Link
                  href={githubUrl}
                  className="w-full inline-flex gap-2 justify-center items-center px-4 py-3 text-center"
                  data-testid="ProjectCardReadMoreLink"
                  target="_blank"
                >
                  Github
                  <SiGithub size={18} />{" "}
                </Link>
              )}
            </Button>
            <Button className="px-0 border bg-transparent border-secondary text-sm font-medium group">
              <Link
                href={url}
                className="w-full inline-flex gap-2 justify-center items-center px-4 py-3"
                data-testid="ProjectCardLiveLink"
                target="_blank"
              >
                Live project
                <GlobeIcon size={18} className="group-hover:animate-spin" />
              </Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
