import Hero from "@/components/Hero/Hero";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home() {
  return (
    <>
      <main className="px-6">

        <section className="min-h-screen py-14">
          <Hero />
        </section>

        <section className="w-full space-y-14">
          <div className="space-y-5 mx-auto w-full text-center">
            <h1 className="font-semibold text-3xl text-text_primary">Recent Projects</h1>
            <p className="text-xs text-gray-400">View projects I have done in the past which best represent my talent.</p>
          </div>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
        
      </main>
    </>
  );
}
