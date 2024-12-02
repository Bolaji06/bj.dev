"use client";

import { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import { ArrowUp } from "lucide-react";
export default function ChatInput() {
  const [textInput, setTextInput] = useState("");

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-secondary-foreground rounded-lg mt-10 flex flex-col gap-3 border border-gray-500 focus-within:outline focus-within:outline-gray-600">
          <div className="w-full rounded-t-lg h-1/2">
            <textarea
              onChange={handleOnChange}
              value={textInput}
              className="w-full bg-transparent resize-none p-3 h-full focus-within:border-none outline-none"
              cols={30}
            />
          </div>

          <div className="self-end px-2 py-2">
            <Button className="rounded-[100%] p-0 w-12 aspect-square text-lg disabled:text-slate-500 disabled:bg-slate-700"
            disabled={!textInput.length}>
              <ArrowUp />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
