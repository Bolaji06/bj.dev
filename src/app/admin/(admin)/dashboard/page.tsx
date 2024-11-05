"use client";

import ExperienceForm from "@/components/admin/Experience/ExperienceForm";
import ProjectForm from "@/components/admin/Project/ProjectForm";
import SkillForm from "@/components/admin/Skills/SkillsForm";
import StackForm from "@/components/admin/Stack/StackForm";
import UserForm from "@/components/admin/User/UserForm";
import TabList from "@/components/TabList/TabList";
import { useState } from "react";

export default function AdminPage(){
    const [tabName, setTabName] = useState<string>("User");

    return (
        <>
            <main className="py-14">
                <header>
                    <TabList tabName={tabName} setTabList={setTabName}/>
                </header>

                <section className="py-4">
                   {
                    tabName === "User" && <UserForm />
                   }
                   {
                    tabName === "Project" && <ProjectForm />
                   }
                   {
                    tabName === "Skills" && <SkillForm />
                   }
                   {
                    tabName === "Experience" && <ExperienceForm />
                   }
                   {
                    tabName === "Stack" && <StackForm />
                   }
                </section>
            </main>
        </>
    )
}