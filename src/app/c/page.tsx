import ChatTextArea from "@/components/ChatInput/ChatTextArea";

export default async function ChatPage() {
  return (
    <>
      <main className="py-14 max-w-3xl w-full mx-auto">
        <section className="py-20 ">Chat Layout</section>

        <section className="max-w-lg relative bg-primary-brand bg-gray-800">
          <div className="fixed bottom-0 max-w-3xl w-full z-50 bg-gray-800 rounded-t-md">
           <ChatTextArea />
          </div>
        </section>
      </main>
    </>
  );
}
