import BugBusterList from "@/components/BugBusterList/BugBusterList";

export default async function BugBusterPage() {
  return (
    <>
      <section className="py-16 px-4">
        <header>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold">Bug Buster</h1>
            <p className="text-xl font-medium text-primary-brand max-w-lg">
              A collection of errors and challenges and how I solved them.
            </p>
          </div>
        </header>
        <div>
          <BugBusterList />
        </div>
      </section>
    </>
  );
}
