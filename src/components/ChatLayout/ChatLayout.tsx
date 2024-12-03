/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";

export default function ChatLayout({
  messages,
}: {
  messages: { sender: string; text: string }[];
}) {
  return (
    <>
      <div className="px-3 space-y-3 pb-20 pt-4">
        {messages.map((msg, index) => {
          return (
            <div className="flex flex-col gap-2 pb-5" key={index}>
              {msg.sender === "user" && (
                <div className="user-chat text-right self-end px-5 py-2 rounded-3xl bg-slate-700 text-sm">
                  {msg.text}
                </div>
              )}

              {msg.sender === "ai" && (
                <div className="ai-chat text-left p-3 rounded-3xl flex justify-start items-start gap-2">
                  <div className="border border-gray-800 rounded-full justify-self-start items-start self-start p-1">
                    <Image
                      src={logo}
                      width={15}
                      height={15}
                      alt="logo"
                      className="aspect-square object-contain"
                    />
                  </div>

                  <div className="bg-gray-800 px-5 py-3 rounded-3xl leading-relaxed text-sm">
                    {msg.text}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
