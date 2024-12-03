/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ChangeEvent, SetStateAction } from "react";
import Button from "../Button/Button";
import { ArrowUp, Loader2 } from "lucide-react";

export interface ChatTextAreaProps {
  formAction: (formData: FormData) => void;
  state: any;
  isPending: boolean;
  textInput: string;
  setTextInput: React.Dispatch<SetStateAction<string>>;
  addMessage: (message: { sender: string; text: string }) => void;
}
export default function ChatTextArea({
  formAction,
  isPending,
  textInput,
  setTextInput,
  addMessage,
  state,
}: ChatTextAreaProps) {
  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }

  function handleOnInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  console.log(state);

  return (
    <>
      <section>
        <div className="w-full">
          <div className="bg-secondary-foreground rounded-t-lg flex border border-gray-500 focus-within:outline focus-within:outline-gray-600">
            <form action={formAction} className="w-full flex gap-3">
              <div className="w-full rounded-t-lg">
                <textarea
                  onChange={handleOnChange}
                  onInput={handleOnInput}
                  placeholder="Ask AI"
                  value={textInput}
                  className="w-full bg-transparent resize-none p-3 min-h-28 max-h-60 h-full focus-within:border-none outline-none text-sm"
                  cols={30}
                  name="text-input"
                />
              </div>

              <div className="self-start mt-2 px-2">
                <Button
                  onClick={() =>
                    addMessage({ sender: "user", text: textInput })
                  }
                  aria-label="Send Message"
                  type="submit"
                  className="flex justify-center items-center p-0 w-12 h-12 aspect-square text-3xl disabled:text-slate-500 disabled:bg-slate-700 rounded-[50%]"
                  disabled={!textInput.length}
                >
                  {isPending ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <ArrowUp size={20} className="w-full" />
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
