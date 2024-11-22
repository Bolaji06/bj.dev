"use client";

import { updateProject } from "@/actions/admin/projectActions";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";

import Label from "@/components/Label/Label";
import FormButtonClient from "@/components/ui/formButton";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

interface IProjectFormValues {
  title: string;
  description: string;
  about: string;
  githubUrl: string;
  thumbnail: string;
  url: string;
  stacks: string[];
}

export default function ProjectFormEdit({ ...props }: IProjectFormValues) {
  const [stackInput, setStackInput] = useState<string>("");
  const stackList = props?.stacks?.[0]?.split(",");
  const [stackLists, setStackList] = useState<string[]>(stackList || []);

  const [projectInput, setProjectInput] = useState({
    title: props?.title || "",
    description: props?.description || "",
    thumbnail: props?.thumbnail || "",
    url: props?.url || "",
    about: props?.about || "",
    githubUrl: props?.githubUrl || "",
  });

  const updateActionWithTitle = updateProject.bind(null, props.title);

  function onChangeStackInput(e: ChangeEvent<HTMLInputElement>) {
    setStackInput(e.target.value);
  }
 

  function projectInputOnChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setProjectInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function addStack(item: string) {
    if (stackInput.length) {
      setStackList((prevState) => {
        if (prevState.includes(item)) {
          return [...prevState];
        }
        setStackInput("");
        return [...prevState, item];
      });
      if (stackLists.includes(item)) {
        toast(`${item} already in the list!`);
      }
    }
  }

  function removeStack(item: string) {
    setStackList((prevState) => {
      return prevState.filter((stack) => item !== stack);
    });
  }

  return (
    <>
      <section>
        <AdminHeaderTitle title="Edit Project" />
        <form action={updateActionWithTitle} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label id="title">
                Project title
                <Input
                  name="title"
                  defaultValue={projectInput.title}
                  onChange={projectInputOnChange}
                />
              </Label>
            </div>

            <div>
              <Label id="description">
                Description
                <Input
                  name="description"
                  defaultValue={projectInput.description}
                  onChange={projectInputOnChange}
                />
              </Label>
            </div>

            <div>
              <Label id="projectUrl">
                Project URL
                <Input
                  name="projectUrl"
                  defaultValue={projectInput.url}
                  onChange={projectInputOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="thumbnail">
                Thumbnail
                <Input
                  name="thumbnail"
                  defaultValue={projectInput.thumbnail}
                  onChange={projectInputOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="githubUrl">
                Github URL
                <Input
                  name="githubUrl"
                  defaultValue={projectInput.githubUrl}
                  onChange={projectInputOnChange}
                />
              </Label>
            </div>
            <div>
              <Label id="stacks">Stack used</Label>
              <div className="flex items-center gap-3">
                <Input value={stackInput} onChange={onChangeStackInput} />
                <Button type="button" onClick={() => addStack(stackInput)}>
                  Add
                </Button>
              </div>
              <div>
                <input
                  type="hidden"
                  aria-hidden
                  readOnly
                  value={stackLists}
                  name="stacks"
                />
              </div>
              <div className="flex items-center flex-wrap gap-2 mt-2">
                {stackLists.map((stack) => {
                  return (
                    <p
                      key={stack}
                      className="flex items-center gap-1 rounded-sm text-xs bg-gray-700 p-1"
                    >
                      {stack}
                      <span
                        onClick={() => removeStack(stack)}
                        className="cursor-pointer"
                      >
                        <X size={13} />
                      </span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <Label id="about">
              About project
              <Textarea
                name="about"
                className="w-full"
                defaultValue={projectInput.about}
                onChange={projectInputOnChange}
              />
            </Label>
          </div>
          <div>
            <FormButtonClient title="Update Project" />
          </div>
        </form>
      </section>
    </>
  );
}
