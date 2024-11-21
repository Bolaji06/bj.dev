import Link from "next/link";
import { AiOutlineWechatWork } from "react-icons/ai";

export default function JimmyButton(){

    
        return (
            <>
              <Link
                href={"/ai-chat"}
                data-testid="link"
                className="hidden fixed bottom-32 py-2 px-3 right-6 lg:flex flex-col items-center font-medium text-sm gap-2 border-2 border-white bg-amber-600 rounded-md shadow-xl"
              >
                <div>
                    <AiOutlineWechatWork size={25}/>
                </div>
                Ask Jimmy
              </Link>
            </>
    )
}