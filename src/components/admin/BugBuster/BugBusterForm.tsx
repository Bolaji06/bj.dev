"use client";

import { addBugBuster } from "@/actions/admin/bugBusterAction";
import Button from "@/components/Button/Button";
import FormButton from "@/components/FormButton/FormButton";
import Label from "@/components/Label/Label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { ChangeEvent, useState, useActionState } from "react";
import toast from "react-hot-toast";

export default function BugBusterForm() {
  const [tagLists, setTagList] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [state, action, isPending] = useActionState(addBugBuster, {});

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTagInput(e.target.value);
  }
  function addTag(item: string) {
    if (tagInput.length) {
      setTagList((prevState) => {
        if (prevState.includes(item)) {
          return [...prevState];
        }
        setTagInput("");
        return [...prevState, item];
      });
      if (tagLists.includes(item)) {
        toast(`${item} already in the list!`);
      }
    }
  }

  function removeTag(item: string) {
    setTagList((prevState) => {
      return prevState.filter((tag) => item !== tag);
    });
  }

  
  return (
    <>
      <section>
        <form action={action} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label id="title">
                Title
                <Input name="title" defaultValue={state?.input?.title} />
              </Label>
              {state?.path && state.path?.[0] === "title" && (
                <p className="text-sm text-red-500">{state?.message}</p>
              )}
            </div>
            <div>
              <Label id="tags">Tags</Label>
              <div className="flex gap-2">
                <input
                  hidden
                  name="tags"
                  defaultValue={JSON.stringify(tagLists)}
                />
                <Input value={tagInput} onChange={onChange} />
                <Button
                  onClick={() => addTag(tagInput)}
                  className="py-0"
                  type="button"
                >
                  Add
                </Button>
              </div>
              {state?.path && state.path?.[0] === "tags" && (
                <p className="text-sm text-red-500">{state?.message}</p>
              )}
              <div className="items-center flex flex-wrap gap-1 mt-2">
                {tagLists.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="px-1 bg-slate-600 text-white rounded-sm flex gap-1 items-center"
                    >
                      <p className="text-xs">{tag}</p>
                      <div
                        className="cursor-pointer"
                        onClick={() => removeTag(tag)}
                      >
                        {" "}
                        <X size={13} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <Label id="backstory">Backstory</Label>
              <Textarea
                name="backstory"
                defaultValue={state?.input?.backstory}
              />
            </div>
            <div>
              <Label id="solution">Solution</Label>
              <Textarea name="solution" defaultValue={state?.input?.solution} />
              {state?.path && state.path?.[0] === "solution" && (
                <p className="text-sm text-red-500">{state?.message}</p>
              )}
            </div>
          </div>
          <FormButton isPending={isPending}>Add Buster</FormButton>
        </form>
      </section>
    </>
  );
}
