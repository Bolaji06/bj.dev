import { AiOutlineWechatWork } from "react-icons/ai";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AIChatButton() {
  return (
    <>
      <div
        data-testid="link"
        className="hidden fixed bottom-32 w-12 aspect-square right-6 lg:flex flex-col items-center justify-center font-medium text-sm gap-2 border-2 shadow-2xl border-white bg-gray-800 rounded-lg shadow-xl"
      >
        <TooltipProvider>
          <Tooltip>
            <Link
              href={"/ai-chat"}
              prefetch={true}
              className="flex justify-center items-center"
            >
              <TooltipTrigger>
                <AiOutlineWechatWork
                  size={25}
                  className="font-semibold text-white"
                />
              </TooltipTrigger>
            </Link>
            <TooltipContent className="mb-4 mr-2 max-w-32 bg-gray-700 text-white">
              <p className="text-xs text-center">
                Chat with AI assistance to get all latest info about Bolaji
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
