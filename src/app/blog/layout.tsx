import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        {children}
        <div className="py-6 footer">
          <Footer />
        </div>
      </main>
    </>
  );
}
