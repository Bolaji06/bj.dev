/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { scan } from "react-scan"

import React, { ChangeEvent, SetStateAction, useCallback } from "react";
import Button from "../Button/Button";
import { ArrowUp } from "lucide-react";

export interface ChatTextAreaProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  textInput: string;
  setTextInput: React.Dispatch<SetStateAction<string>>;
  addMessage: (message: { sender: "ai" | "user"; text: string }) => void;
}
export default function ChatTextArea({
  formAction,
  isPending,
  textInput,
  setTextInput,
  addMessage,
}: ChatTextAreaProps) {

  const handleOnChange = useCallback(function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextInput(e.target.value);
  }, [])

  // Increase the textarea height when typing on new lines
  function handleOnInput(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function handleButtonClick() {
    addMessage({ sender: "user", text: textInput.trim() });
    //setTextInput("");
  }

  if(typeof window !== undefined){
    scan({
      enabled: true,
      log: true,
    })
  }

  return (
    <>
      <section>
        <div className="w-full">
          <div className="bg-background rounded-t-lg flex border border-gray-400 focus-within:outline focus-within:outline-gray-500">
            <form action={formAction} className="w-full flex gap-3">
              <div className="w-full rounded-t-lg">
                <textarea
                  onChange={handleOnChange}
                  onInput={handleOnInput}
                  placeholder="Ask AI about Bolaji Bolajoko"
                  value={textInput}
                  className="w-full bg-transparent resize-none p-3 min-h-28 max-h-60 h-full focus-within:border-none outline-none text-sm rounded-t-lg"
                  cols={30}
                  name="text-input"
                />
              </div>

              <div className="self-start mt-2 px-2">
                <Button
                  onClick={handleButtonClick}
                  aria-label="Send Message"
                  type="submit"
                  className="flex justify-center items-center p-0 w-12 h-12 aspect-square text-3xl disabled:text-slate-500 disabled:bg-slate-700 rounded-[50%]"
                  disabled={!textInput.length || isPending}
                >
                  <ArrowUp size={20} className="w-full" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
