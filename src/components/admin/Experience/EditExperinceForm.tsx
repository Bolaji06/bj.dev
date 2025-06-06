"use client";

import { updateExperience } from "@/actions/admin/experienceAction";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Label from "@/components/Label/Label";
import FormButtonClient from "@/components/ui/formButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IExperience } from "@/definition/definition";
import { ChangeEvent, useState } from "react";

export default function EditExperienceForm({ ...props }: IExperience) {
  const updateExperienceActionWithTitle = updateExperience.bind(
    null,
    props?.title
  );
  const [formInput, setFormInput] = useState({
    title: props?.title || "",
    role: props?.role || "",
    company: props?.company || "",
    description: props?.description || "",
    startDate: props?.startDate?.slice(0, 16) || "",
    endDate: props?.endDate?.slice(0, 16) || "",
  });

  function handleOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <>
      <section>
        <AdminHeaderTitle title="Edit experience" />

        <form action={updateExperienceActionWithTitle} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label id="title">
                Title
                <Input
                  name="title"
                  value={formInput.title}
                  onChange={handleOnChange}
                />
              </Label>
            </div>

            <div>
              <Label id="company">
                Company
                <Input
                  name="company"
                  value={formInput.company}
                  onChange={handleOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="role">
                Role
                <Input
                  name="role"
                  value={formInput.role}
                  onChange={handleOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="startDate">
                Start date
                <Input
                  name="startDate"
                  type="datetime-local"
                  value={formInput.startDate}
                  onChange={handleOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="endDate">
                End date
                <Input
                  name="endDate"
                  type="datetime-local"
                  value={formInput.endDate}
                  onChange={handleOnChange}
                />
              </Label>
            </div>
          </div>
          <div>
            <Label id="description">
              Description
              <Textarea
                name="description"
                value={formInput.description}
                onChange={handleOnChange}
              />
            </Label>
          </div>
          <div className="mt-4">
            <FormButtonClient title="Update Experience" />
          </div>
        </form>
      </section>
    </>
  );
}
