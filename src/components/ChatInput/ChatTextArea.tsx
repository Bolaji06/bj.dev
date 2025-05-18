"use client";
import React, { ChangeEvent, useCallback } from "react";
import Button from "../Button/Button";
import { ArrowUp } from "lucide-react";
import { IMessage } from "@/app/ai-chat/page";

export interface ChatTextAreaProps {
  formAction: (e: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  textInput: string;
  setTextInput: React.Dispatch<React.SetStateAction<string>>;
  addMessage: (message: IMessage) => void;
}

export default function ChatTextArea({
  formAction,
  isPending,
  textInput,
  setTextInput,
  addMessage,
}: ChatTextAreaProps) {
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTextInput(e.target.value);
    },
    [setTextInput]
  );

  // Increase the textarea height when typing on new lines
  const handleOnInput = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textInput.trim() || isPending) return;
    // Add user message immediately
    addMessage({ sender: "user", text: textInput.trim() });
    formAction(e); // Trigger streaming
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  return (
    <section>
      <div className="w-full">
        <div className="bg-background rounded-t-lg flex border border-gray-400 focus-within:outline focus-within:outline-gray-500">
          <form onSubmit={handleSubmit} className="w-full flex gap-3">
            <div className="w-full rounded-t-lg">
              <textarea
                onKeyDown={handleKeyDown}
                onChange={handleOnChange}
                onInput={handleOnInput}
                placeholder="Ask AI about Bolaji Bolajoko"
                value={textInput}
                className="w-full bg-transparent resize-none p-3 min-h-28 max-h-60 h-full focus-within:border-none outline-none text-sm rounded-t-lg"
                cols={30}
                name="text-input"
                disabled={isPending}
              />
            </div>
            <div className="self-start mt-2 px-2">
              <Button
                aria-label="Send Message"
                type="submit"
                className="flex justify-center items-center p-0 w-12 h-12 aspect-square text-3xl disabled:text-slate-500 disabled:bg-slate-700 rounded-[50%]"
                disabled={!textInput.trim().length || isPending}
              >
                <ArrowUp size={20} className="w-full" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}