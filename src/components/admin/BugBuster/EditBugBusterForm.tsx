"use client";

import Button from "@/components/Button/Button";
import Label from "@/components/Label/Label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { updateBugBuster } from "@/actions/admin/bugBusterAction";
import toast from "react-hot-toast";
import FormButtonClient from "@/components/ui/formButton";

interface EditBugBusterFormProps {
  title: string;
  backstory: string;
  solution: string;
  tags: string[];
  id: string
}
export default function EditBugBusterForm({
  ...props
}: EditBugBusterFormProps) {
    const [tagLists, setTagList] = useState<string[]>(props.tags);
    const [tagInput, setTagInput] = useState<string>("");
    const editBugBusterAction = updateBugBuster.bind(null, props.id)

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
        <form action={editBugBusterAction} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Label id="title">
                Title
                <Input name="title" defaultValue={props.title} />
              </Label>
              
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
                defaultValue={props.backstory}
              />
            </div>
            <div>
              <Label id="solution">Solution</Label>
              <Textarea name="solution" defaultValue={props.solution} />
              
            </div>
          </div>
          <FormButtonClient 
          title="Edit Bug Buster"/>
        </form>
      </section>
    </>
  );
}
