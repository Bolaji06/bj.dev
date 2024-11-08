"use client";

import ExperienceForm from "@/components/admin/Experience/ExperienceForm";
import ProjectForm from "@/components/admin/Project/ProjectForm";
import SkillForm from "@/components/admin/Skills/SkillsForm";
import StackForm from "@/components/admin/Stack/StackForm";
import UserForm from "@/components/admin/User/UserForm";
import TabList from "@/components/TabList/TabList";
import { IUser } from "@/definition/definition";
import { useState } from "react";

export default function PageContent({ user }: { user: IUser }) {
  const [tabName, setTabName] = useState<string>("User");

  const tabComponent: Record<string, React.JSX.Element> = {
    User: <UserForm user={user} />,
    Project: <ProjectForm />,
    Skills: <SkillForm />,
    Experience: <ExperienceForm />,
    Stack: <StackForm />,
  };

  return (
    <>
      <main className="">
        <header>
          <TabList tabName={tabName} setTabList={setTabName} />
        </header>

        <section className="py-4">
          {tabComponent[tabName] || <div>No tab</div>}
        </section>
      </main>
    </>
  );
}
