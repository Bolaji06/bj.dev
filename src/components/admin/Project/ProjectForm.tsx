"use client";

import { addProjectAction } from "@/actions/admin/projectActions";
import AdminHeaderTitle from "@/components/AdminHeader/AdminHeaderTitle";
import Button from "@/components/Button/Button";
import FormButton from "@/components/FormButton/FormButton";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import {
  ChangeEvent,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

export default function ProjectForm() {
  const [stackInput, setStackInput] = useState<string>("");
  const [stackLists, setStackList] = useState<string[]>([]);
  const [state, action, isPending] = useActionState(addProjectAction, {});

  function onChangeStackInput(e: ChangeEvent<HTMLInputElement>) {
    setStackInput(e.target.value);
  }
  const hasMount = useRef(false);

  function addStack(item: string) {
    if(stackInput.length){
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

  useEffect(() => {
    if (hasMount.current) {
      if (state.success) {
        toast.success(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
        
      } else if(state.success === false) {
        toast.error(
          <div className="capitalize font-medium">{state.message}</div>,
          { duration: 4000 }
        );
      }
    } else {
      hasMount.current = true;
    }
  }, [state]);

  return (
    <>
      <section>
        <AdminHeaderTitle title="Add new Project" />
        <form action={action} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <Label id="title">
                Project title
                <Input name="title" />
              </Label>
            </div>

            <div>
              <Label id="description">
                Description
                <Input name="description" />
              </Label>
            </div>

            <div>
              <Label id="projectUrl">
                Project URL
                <Input name="projectUrl" />
              </Label>
            </div>
            <div>
              <Label id="thumbnail">
                Thumbnail
                <Input name="thumbnail" />
              </Label>
            </div>
            <div>
              <Label id="githubUrl">
                Github URL
                <Input name="githubUrl" />
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
                      <span onClick={() => removeStack(stack)} className="cursor-pointer">
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
              <Textarea name="about" className="w-full" />
            </Label>
          </div>
          <div>
            <FormButton isPending={isPending}>
              {isPending ? "A moment..." : "Add Project"}
            </FormButton>
          </div>
        </form>
      </section>
    </>
  );
}
