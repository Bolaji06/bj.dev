"use client";

import { ChangeEvent, useActionState, useState } from "react";
import Button from "../Button/Button";
import { ArrowUp, Loader2 } from "lucide-react";
import { sendPrompt } from "@/actions/promptAction";

export default function ChatTextArea() {
  const [textInput, setTextInput] = useState("");
  const [state, action, isPending] = useActionState(sendPrompt, {});

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }

  console.log(state);

  return (
    <>
      <section>
        <div className="w-full">
          <div className="bg-secondary-foreground rounded-t-lg flex border border-gray-500 focus-within:outline focus-within:outline-gray-600">
            <form action={action} className="w-full flex gap-3">
              <div className="w-full rounded-t-lg">
                <textarea
                  onChange={handleOnChange}
                  value={textInput}
                  className="w-full bg-transparent resize-none p-3 h-full focus-within:border-none outline-none"
                  cols={30}
                  name="text-input"
                />
              </div>

              <div className="self-start mt-2 px-2">
                <Button
                  type="submit"
                  className="flex justify-center items-center p-0 w-12 h-12 aspect-square text-3xl disabled:text-slate-500 disabled:bg-slate-700 rounded-[50%]"
                  disabled={!textInput.length}
                >
                  {isPending ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <ArrowUp size={20} className="w-full"/>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
