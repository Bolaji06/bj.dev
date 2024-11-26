"use client";

import { AiOutlineWechatWork } from "react-icons/ai";
import { useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function JimmyButton() {
  const router = useRouter();
  return (
    <>
    
      <div
        data-testid="link"
        className="hidden fixed bottom-32 w-12 aspect-square right-6 lg:flex flex-col items-center justify-center font-medium text-sm gap-2 border-2 shadow-2xl border-white bg-gray-800 rounded-lg shadow-xl"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger onClick={() => router.push("/ai-chat")}>
              <AiOutlineWechatWork size={25} className="font-semibold text-white" />
            </TooltipTrigger>
            <TooltipContent className="mb-4 mr-2 max-w-32 bg-gray-700 text-white">
              <p className="text-xs text-left">
                Chat with AI assistance to get all latest info about
                Bolaji
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
