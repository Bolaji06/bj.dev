import EditExperienceForm from "@/components/admin/Experience/EditExperinceForm";
import { getExperience } from "@/data/fetchExperience";
import { TExperienceResponse } from "@/definition/definition";

export default async function EditExperiencePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const param = await params;
  const paramTitle = param.title;
  const response: TExperienceResponse = await getExperience(paramTitle);
  const experience = response.experience;

  return (
    <>
      <main className="py-14">
        <EditExperienceForm {...experience} />
      </main>
    </>
  );
}
