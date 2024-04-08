"use client";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col gap-3 items-start bg-white overflow-y-auto shadow-sm`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h1 className="text-lg font-semibold">Chat Bot</h1>
        </div>
        <div className="flex flex-col h-full overflow-y-hidden w-full items-center justify-center">
          <Chat />
        </div>
      </div>
    </main>
  );
}
