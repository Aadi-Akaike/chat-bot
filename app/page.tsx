"use client";
import Chat from "@/components/Chat";
import { useEffect, useState } from "react";

export default function Home() {
  const [startChat, setStartChat] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setStartChat(false);
      }, 10000);
    };

    const handleUserInteraction = () => {
      resetTimeout();
    };

    // Add event listeners for user interactions
    document.addEventListener("mousemove", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("scroll", handleUserInteraction);
    document.addEventListener("wheel", handleUserInteraction);
    document.addEventListener("mouseover", handleUserInteraction);

    // Set initial timeout
    resetTimeout();

    // Cleanup function to remove event listeners
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousemove", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
      document.removeEventListener("wheel", handleUserInteraction);
      document.removeEventListener("mouseover", handleUserInteraction);
    };
  }, []);

  return (
    <main
      className={`flex h-screen flex-col gap-3 items-start bg-white overflow-y-auto shadow-sm`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h1 className="text-lg font-semibold">Chat Bot</h1>
        </div>
        <div className="flex flex-col h-full overflow-y-hidden w-full items-center justify-center">
          {startChat ? (
            <Chat />
          ) : (
            <button
              onClick={() => setStartChat(true)}
              className="bg-blue-500 px-3 py-2 border rounded-lg font-semibold"
            >
              Start Chat
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
