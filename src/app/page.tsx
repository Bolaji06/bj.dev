import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />

        <section className="max-w-4xl mx-auto min-h-screen py-14">
          <Hero />

        </section>
        
      </main>
    </>
  );
}
