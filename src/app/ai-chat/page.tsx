"use client";
import ChatTextArea from "@/components/ChatInput/ChatTextArea";
import ChatLayout from "@/components/ChatLayout/ChatLayout";
import { sendPrompt } from "@/actions/promptAction";
import { useActionState, useState } from "react";
import TypeWriter from "@/components/TypeWriter/TypeWriter";

export default function ChatPage() {
  const [state, action, isPending] = useActionState(sendPrompt, {});
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  function addMessages(message: { sender: string; text: string }) {
    setMessages((prevState) => {
      return [...prevState, message];
    });
  }

  return (
    <>
      <main className="py-14 max-w-3xl w-full mx-auto relative">
        <div className="flex justify-center items-center fixed top-12 mx-auto -translate-x-1/2 left-1/2">
        <div className="mx-auto p-1 bg-gray-700/50 rounded-b-md">
          <p className="text-[.6rem] text-gray-500">Powered by Llama 3.2</p>
        </div>
        </div>
        {!messages.length && (
          <section className="mt-20 flex justify-center items-center">
            <TypeWriter
              streams={[
                "Ask about my projects",
                "Ask about my work ethics",
                "Ask about me",
              ]}
              typeSpeed={40}
              className="text-center text-3xl font-semibold text-gray-500"
            />
          </section>
        )}
        <section>
          <ChatLayout
            messages={messages}
            isPending={isPending}
            addMessage={addMessages}
            state={state}
          />
        </section>
        <section className="max-w-lg relative bg-primary-brand bg-gray-800">
          <div className="fixed bottom-0 max-w-3xl w-full z-50 bg-gray-800 rounded-t-md">
            <ChatTextArea
              formAction={action}
              isPending={isPending}
              setTextInput={setTextInput}
              textInput={textInput}
              addMessage={addMessages}
            />
          </div>
        </section>
      </main>
    </>
  );
}
