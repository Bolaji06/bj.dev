"use client";
import ChatTextArea from "@/components/ChatInput/ChatTextArea";
import ChatLayout from "@/components/ChatLayout/ChatLayout";
import { useState } from "react";
import TypeWriter from "@/components/TypeWriter/TypeWriter";

export interface IMessage {
  sender: "ai" | "user";
  text: string;
}

export default function ChatPage() {
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textInput.trim() || isPending) return;

    // Do not add user message here; ChatTextArea handles it
    setTextInput("");
    setIsPending(true);

    let retryCount = 0;
    const maxRetries = 3;

    const tryConnect = () => {
      try {
        // Initialize EventSource for streaming
        const source = new EventSource(
          `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/profile?query=${encodeURIComponent(textInput)}`
        );

        // Add placeholder AI message
        const aiMessage: IMessage = { sender: "ai", text: "" };
        setMessages((prev) => [...prev, aiMessage]);

        source.onmessage = (event) => {
          if (event.data === "[DONE]") {
            source.close();
            setIsPending(false);
            retryCount = 0; // Reset retries on success
            return;
          }
          try {
            const data = JSON.parse(event.data);
            if (data.success) {
              // Append chunk to the last AI message
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  sender: "ai",
                  text: updated[updated.length - 1].text + data.message,
                };
                return updated;
              });
            } else {
              setMessages((prev) => [
                ...prev.slice(0, -1), // Remove placeholder
                { sender: "ai", text: `Error: ${data.message}` },
              ]);
              source.close();
              setIsPending(false);
            }
          } catch (error) {
            console.error("Parse error:", error, "Event data:", event.data);
            setMessages((prev) => [
              ...prev.slice(0, -1),
              { sender: "ai", text: "Error: Failed to parse response" },
            ]);
            source.close();
            setIsPending(false);
          }
        };

        source.onerror = (error) => {
          console.error("EventSource error:", error, {
            query: textInput,
            retryCount,
            url: `${process.env.NEXT_PUBLIC_BASE_API_ENDPOINT}/api/profile`,
          });
          setMessages((prev) => [
            ...prev.slice(0, -1),
            {
              sender: "ai",
              text: `Error: Stream disconnected (Retry ${retryCount + 1}/${maxRetries})`,
            },
          ]);
          source.close();
          if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(tryConnect, 2000); // Retry after 2 seconds
          } else {
            setMessages((prev) => [
              ...prev,
              { sender: "ai", text: "Error: Failed to connect after retries" },
            ]);
            setIsPending(false);
          }
        };

        // Cleanup on component unmount
        return () => source.close();
      } catch (error) {
        console.error("Stream setup error:", error);
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
          },
        ]);
        setIsPending(false);
      }
    };

    tryConnect();
  };

 

  return (
    <main className="py-14 max-w-3xl w-full mx-auto">
      <div className="flex justify-center items-center fixed top-12 mx-auto -translate-x-1/2 left-1/2">
        <div className="mx-auto p-1 bg-gray-700/50 rounded-b-md">
          <p className="text-[.6rem] text-gray-500">Powered by Llama 3</p>
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
            showCursor={true}
            typeSpeed={40}
            className="text-center text-3xl font-semibold text-gray-500"
          />
        </section>
      )}
      <section className="relative -z-10 mt-4">
        <ChatLayout
          messages={messages}
          isPending={isPending}
          addMessage={(message: IMessage) => setMessages((prev) => [...prev, message])}
          state={{}}
        />
      </section>
      <section className="max-w-lg relative">
        <div className="fixed bottom-0 max-w-3xl w-full z-50">
          <ChatTextArea
            formAction={handleSubmit}
            isPending={isPending}
            setTextInput={setTextInput}
            textInput={textInput}
            addMessage={(message: IMessage) => setMessages((prev) => [...prev, message])}
          />
        </div>
      </section>
    </main>
  );
}