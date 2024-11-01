import { formatTimestamp } from "../../utils/utils";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa6";

export interface BlogCardProps {
    id?: number;
    slug: string;
    title: string;
    description: string;
    published_at: string;
}
export default function BlogCard({ slug, title, description, published_at }: BlogCardProps) {
  return (
    <>
      <section className="rounded-md px-3 py-2" data-testid="blogContainer">
        <div className="flex gap-4">
          <div data-testid="blogImageWrapper" className="flex-shrink-0 self-start flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 
          w-16 aspect-square rounded-full outline-2 outline-dashed outline-offset-2 outline-secondary">
            <FaBookOpen size={18} role="img"/>
          </div>

          <div className=" w-full">
            <p className="text-xs text-gray-400">{formatTimestamp(published_at)}</p>
            <h2 className="text-lg sm:text-xl text-text_primary font-medium">{title}</h2>
            <p className="text-sm">{description}</p>
            <Link role="link" className="text-sm text-secondary hover:underline" href={`/blog/${slug}`}>Read more</Link>
          </div>
        </div>
      </section>
    </>
  );
}
