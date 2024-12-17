import Link from "next/link";

export default async function BugBusterPage() {
  return (
    <>
      <section className="py-20 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
          </div>
        </header>

        <div className="py-4 mt-2 border-b border-border w-full max-w-2xl">
          <Link
            className="font-medium hover:text-slate-500 transition-colors duration-200 ease-in-out"
            href={"/"}
          >
            MDX: Unexpected character , (U+002C) in name, expected a name
            character such as letters, digits, $, or _; whitespace before
            attributes; or the end of the tag
          </Link>
        </div>
      </section>
    </>
  );
}
