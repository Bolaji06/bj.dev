import Link from "next/link";
import { AiOutlineWechatWork } from "react-icons/ai";

export default function JimmyButton() {
  return (
    <>
      <Link
        href={"/ai-chat"}
        data-testid="link"
        className="hidden fixed bottom-32 w-12 aspect-square right-6 lg:flex flex-col items-center justify-center font-medium text-sm gap-2 border-2 shadow-2xl border-white bg-gray-800 rounded-lg shadow-xl"
      >
        <div>
          <AiOutlineWechatWork size={25} className="font-semibold" />
        </div>
      </Link>
    </>
  );
}
