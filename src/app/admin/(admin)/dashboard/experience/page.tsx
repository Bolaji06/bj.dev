import { deleteExperienceAction } from "@/actions/admin/experienceAction";
import ExperienceForm from "@/components/admin/Experience/ExperienceForm";
import AdminCard from "@/components/ui/AdminCard";
import getExperience from "@/data/fetchExperience";
import { IExperience, IExperienceResponse } from "@/definition/definition";

export default async function ExperiencePage() {
  const response: IExperienceResponse = await getExperience();
  const experiences = response.experience;

  return (
    <>
      <main>
        <section className="py-14">
          <ExperienceForm />
        </section>

        <section className="py-6 flex items-center gap-2 w-full max-w-4xl overflow-auto">
          {experiences.map((experience: IExperience) => {
            return (
              <div key={experience.id}>
                <AdminCard
                  title={experience.title}
                  action={deleteExperienceAction}
                />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
