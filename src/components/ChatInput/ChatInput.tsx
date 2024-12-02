"use client";

import { ChangeEvent, useActionState, useState } from "react";
import Button from "../Button/Button";
import { ArrowUp, Loader2 } from "lucide-react";
import { sendPrompt } from "@/actions/promptAction";
export default function ChatInput() {
  const [textInput, setTextInput] = useState("");
  const [state, action, isPending] = useActionState(sendPrompt, {})

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }

  console.log(state);
  return (
    <>
      <div className="w-full">
        <div className="bg-secondary-foreground rounded-lg mt-10 flex border border-gray-500 focus-within:outline focus-within:outline-gray-600">
          <form action={action} className="w-full flex flex-col gap-3">
          <div className="w-full rounded-t-lg h-1/2">
            <textarea
              onChange={handleOnChange}
              value={textInput}
              className="w-full bg-transparent resize-none p-3 h-full focus-within:border-none outline-none"
              cols={30}
              name="text-input"
            />
          </div>

          <div className="self-end px-2 py-2">
            <Button
              type="submit"
              className="p-0 w-12 h-12 aspect-square text-lg disabled:text-slate-500 disabled:bg-slate-700 rounded-full"
              disabled={!textInput.length}
            >
              {isPending ? <Loader2 size={20} className="animate-spin"/> : <ArrowUp />}
            </Button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
