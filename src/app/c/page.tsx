"use client";
import ChatTextArea from "@/components/ChatInput/ChatTextArea";
import ChatLayout from "@/components/ChatLayout/ChatLayout";
import { sendPrompt } from "@/actions/promptAction";
import { useActionState, useState } from "react";

export default function ChatPage() {
  const [state, action, isPending] = useActionState(sendPrompt, {});
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string, text: string}[]>([])

  function addMessages(message: { sender: string, text: string}){
    setMessages((prevState) => {
      return [...prevState, message]
    });
  }

  console.log(messages);

  return (
    <>
      <main className="py-14 max-w-3xl w-full mx-auto">
        <section>
          <ChatLayout messages={messages} />
        </section>
        <section className="max-w-lg relative bg-primary-brand bg-gray-800">
          <div className="fixed bottom-0 max-w-3xl w-full z-50 bg-gray-800 rounded-t-md">
            <ChatTextArea
              formAction={action}
              isPending={isPending}
              setTextInput={setTextInput}
              textInput={textInput}
              state={state}
              addMessage={addMessages}
            />
          </div>
        </section>
      </main>
    </>
  );
}
