import ChatInput from "@/components/ChatInput/ChatInput";
import TypeWriter from "@/components/TypeWriter/TypeWriter";

export default function AIChat() {
  return (
    <>
      <main className="py-14 max-h-screen max-w-3xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-6">
          <div>
            <TypeWriter />
          </div>

          <div className="w-full">
            <ChatInput />
          </div>
        </div>

        <footer>
          <p className="text-xs text-center text-gray-600">
            Powered by Llama 3.2
          </p>
        </footer>
      </main>
    </>
  );
}
