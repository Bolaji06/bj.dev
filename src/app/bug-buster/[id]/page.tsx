export default async function BusterDetails({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<React.ReactNode> {
  const busterId = (await params).id;

  console.log(busterId);
  return (
    <>
      <section className="py-14 px-4 max-w-3xl w-full">
        <header className="border-b border-border py-2">
          <h1 className="text-xl font-semibold">
            MDX: Unexpected character , (U+002C) in name, expected a name
            character such as letters, digits, $, or _; whitespace before
            attributes; or the end of the tag
          </h1>
          <div className="py-2 space-y-2 text-sm text-mute_foreground">
            <p className="">MDX Nextjs</p>
            <p className="">1st June 2023</p>
          </div>
        </header>

        <div className="mt-6 border-b border-border pb-4">
          <div>
            <h2 className="text-2xl py-2 font-semibold">Backstory</h2>
          </div>
          <div>
            <p className="italic text-mute_foreground py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, eligendi molestias autem aut nisi libero vitae culpa
              unde necessitatibus iusto possimus aliquam sapiente earum
              similique omnis dolorem fugiat accusantium adipisci. Minus
              dignissimos tenetur recusandae molestiae quae natus tempora
              corrupti quos eveniet asperiores, provident necessitatibus
              adipisci sed aspernatur animi laboriosam aut quas reprehenderit
              enim non rerum porro nihil consectetur earum? Ab! Possimus, eum
              corrupti nesciunt fuga repudiandae iusto assumenda dicta sed sit
              enim alias mollitia facilis dolore repellat numquam quibusdam
              harum fugit quisquam doloremque, sapiente, iste rerum accusamus
              expedita tempora? Quo?
            </p>
          </div>
        </div>

        <div className="mt-6 border-b border-border py-4 pb-10">
          <div>
            <h2 className="py-2 text-2xl font-semibold">Busted! 🎆</h2>
          </div>
          <p className="mb-4">
            To fix this, I wrapped the problematic in an inline code block.
          </p>

          <pre className="m-0 p-0">
            <code className="m-0 p-0">
              <section className="py-14 px-4 max-w-3xl w-full">
                <header className=" border-border py-2">
                  <h1 className="text-xl font-semibold">
                    MDX: Unexpected character , (U+002C) in name, expected a
                    name character such as letters, digits, $, or _; whitespace
                    before attributes; or the end of the tag
                  </h1>
                  <div className="py-2 space-y-2 text-sm text-mute_foreground">
                    <p className="">MDX Nextjs</p>
                    <p className="">1st June 2023</p>
                  </div>
                </header>
              </section>
            </code>
          </pre>
          <div className="ref-links text-sm py-3">
            <p className="text-mute_foreground">Ref links: stackoverflow, githubissues</p>
          </div>
        </div>
      </section>
    </>
  );
}
