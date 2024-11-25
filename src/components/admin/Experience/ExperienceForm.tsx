"use client";

import { addExperience } from "@/actions/admin/experienceAction";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import FormButton from "@/components/FormButton/FormButton";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChangeEvent,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

export default function ExperienceForm() {
  const [state, action, isPending] = useActionState(addExperience, {});
  const [formInput, setFormInput] = useState({
    title: "",
    role: "",
    company: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const hasMount = useRef(false);

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

  useEffect(() => {
    // help to avoid re-rendering of toast when component mounts
    if (hasMount.current) {
      if (state.success) {
        toast.success(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
      } else if (state.success === false) {
        toast.error(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
      }
    } else {
      hasMount.current = true;
    }
  }, [state.success]);

  return (
    <>
      <section>
        <AdminHeaderTitle title="Fill out your experience" />

        <form action={action} className="space-y-3">
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
            <FormButton isPending={isPending}>
              {isPending ? "Adding" : "Add Experience"}
            </FormButton>
          </div>
        </form>
      </section>
    </>
  );
}
