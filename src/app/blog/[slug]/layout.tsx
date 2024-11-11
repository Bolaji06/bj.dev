export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
