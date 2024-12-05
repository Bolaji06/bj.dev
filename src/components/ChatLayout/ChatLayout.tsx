/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useEffect } from "react";
import ChatLoader from "../ChatLoader/ChatLoader";
import TypeWriter from "../TypeWriter/TypeWriter";

interface IMessages {
  sender: "ai" | "user";
  text: string;
}
interface ChatLayoutProps {
  messages: IMessages[];
  isPending: boolean;
  state: any;
  addMessage: (message: IMessages) => void;
}
export default function ChatLayout({
  messages,
  isPending,
  addMessage,
  state,
}: ChatLayoutProps) {
  useEffect(() => {
    if (state?.message) {
      addMessage({ sender: "ai", text: state.message });
    }
  }, [state?.message]);
  return (
    <>
      <div className="px-3 space-y-2 pb-20 pt-4">
        {messages.map((msg, index) => {
          return (
            <div className="flex flex-col gap-2 pb-3" key={index}>
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
                      width={20}
                      height={20}
                      alt="logo"
                      className="w-10 aspect-square object-contain"
                    />
                  </div>

                  <div className="bg-gray-800 px-5 py-3 rounded-3xl leading-relaxed text-sm">
                    {msg.text.length && <TypeWriter streams={[msg.text]} typeSpeed={10} showCursor={false}/>}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {isPending && (
          <div className="flex justify-start items-start">
            <div className=" bg-gray-800 px-5 py-3 rounded-3xl leading-relaxed text-sm">
              <ChatLoader />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
