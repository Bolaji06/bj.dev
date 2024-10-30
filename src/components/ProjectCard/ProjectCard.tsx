import Image from "next/image";
import organi from "../../../public/organi.png";
import Button from "../Button/Button";
import { ArrowRight, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { myProjectsData } from "@/data/project";

export default function ProjectCard() {
  return (
    <>
      <section className="w-full mb-12 mt-3" data-testid="ProjectCardContainer">
        <div
          className="w-full rounded-lg"
          data-testid="ProjectCardImageWrapper"
        >
          <Image
            src={organi}
            alt="Organi project thumbnail image"
            width={1000}
            height={1000}
            className="w-full rounded-lg"
            data-testid="ProjectCardThumbnail"
          />
        </div>

        <div className="pt-10 pb-3" data-testid="ProjectCardTitleContainer">
          <h2
            className="font-semibold text-text_primary text-lg"
            data-testid="ProjectCardTitle"
          >
            Organi | E-commerce Store
          </h2>
          <p
            className="py-3 text-sm text-gray-400 max-w-full truncate"
            data-testid="ProjectCardDescription"
          >
            Organi is a one stop for all your groceries and fashion items
          </p>
        </div>
        <div className="py-2">
          <ul
            className="flex items-center gap-3 text-xs"
            data-testid="ProjectCardToolsWrapper"
          >
            {myProjectsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-xs flex flex-wrap md:flex-nowrap gap-4 items-center"
                  data-testid="ProjectCardToolsList"
                >
                  {item.stack.map((stack) => {
                    return <p key={stack.tool} className="flex items-center">{<stack.icon />} <span className="px-2">{stack.tool}</span></p>
                  })}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          data-testid="ProjectCardFooter"
          className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center pt-6 pb-6 md:pb-14"
        >
          <Button className="px-0 bg-primary-brand text-sm font-medium text-center">
            <Link
              href={"/"}
              className="w-full inline-flex gap-2 justify-center items-center px-4 py-3 text-center"
              data-testid="ProjectCardReadMoreLink"
            >
              Read more
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button className="px-0 border bg-transparent border-secondary text-sm font-medium">
            <Link
              href={"/"}
              className="w-full inline-flex gap-2 justify-center items-center px-4 py-3"
              data-testid="ProjectCardLiveLink"
            >
              Live project
              <GlobeIcon size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
