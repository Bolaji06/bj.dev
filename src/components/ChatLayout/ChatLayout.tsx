/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { useEffect } from "react";
import ChatLoader from "../ChatLoader/ChatLoader";
//import TypeWriter from "../TypeWriter/TypeWriter";
import Markdown from "react-markdown";

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
                <div className="user-chat text-right self-end px-5 py-2 rounded-3xl bg-background border border-gray-400 text-sm">
                  {msg.text}
                </div>
              )}

              {msg.sender === "ai" && (
                <div className="ai-chat text-left p-3 rounded-3xl flex items-start space-x-3">
                  <div className="border w-8 h-8 border-gray-800 rounded-full p-1 flex-shrink-0">
                    <Image
                      src={logo}
                      width={20}
                      height={20}
                      alt="logo"
                      className="w-full h-full aspect-square object-contain"
                    />
                  </div>

                  <div className="ai-markdown bg-gray-800 px-5 py-3 col-span-2 rounded-3xl leading-relaxed text-sm text-slate-200">
                    {/* {msg.text.length && <TypeWriter streams={[msg.text]} typeSpeed={10} showCursor={false}/>} */}

                    <Markdown
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {msg.text}
                    </Markdown>
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
