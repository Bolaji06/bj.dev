export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="px-10">{children}</main>
    </>
  );
}
