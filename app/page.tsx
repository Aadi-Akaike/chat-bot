"use client";
import Image from "next/image";
import botIcon from "@/public/icons/bot.svg";
import sendIcon from "@/public/icons/send.svg";
import { useEffect, useRef, useState } from "react";
import { generateUniqueId } from "@/app/utils";

interface Message {
  text: string;
  isUser: boolean;
  chatId: string;
}

export default function Home() {
  const [sessionId, setSessionId] = useState<string>("");

  const initialMessages = [
    {
      text: "Hi! I'm RA.BOT, the Solar Education Assistant. How may I help you today?",
      isUser: false,
      chatId: sessionId,
    },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const [hideInput, setHideInput] = useState<boolean>(false);
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { text: newMessage, isUser: true, chatId: sessionId },
      ]);
      setNewMessage("");
      scrollToBottom("smooth");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const scrollToBottom = (behavior: ScrollBehavior) => {
    if (scrollableContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollableContainerRef.current;
      scrollableContainerRef.current?.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: behavior,
      });
    }
  };

  useEffect(() => {
    scrollToBottom("auto");
    setSessionId(generateUniqueId());
  }, []);

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages.length]);

  return (
    <main className={`flex h-screen flex-col bg-white`}>
      {/* header */}
      <div className="flex flex-row  gap-4 py-2 px-6 items-center shadow-sm z-10">
        <Image src={botIcon} alt="Bot Icon" width={56} height={56} />
        <div className="flex flex-col">
          <p className="text-2xl font-bold leading-normal text-[#1E1E1E]">
            RA.BOT
          </p>
        </div>
      </div>

      {/* Chat container */}
      <div
        className="p-4 flex flex-col gap-2 h-full overflow-y-auto bg-[#F9FAFB] justify-end"
        ref={scrollableContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isUser && (
              <div className="shrink-0">
                <Image src={botIcon} alt="Bot Icon" width={40} height={40} />
              </div>
            )}
            <div
              className={`rounded-lg px-3.5 py-2.5 max-w-[70%] text-[#1E1E1E] ${
                message.isUser
                  ? "bg-[#E8F8DD] rounded-tl-lg rounded-b-lg shadow-sm"
                  : "bg-white border border-[#EAECF0] rounded-tr-lg rounded-b-lg shadow-xs"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* footer */}
      <div className="px-6 py-4 border-t border-t-[#D0D5DD]">
        <div className="flex flex-row gap-2 shadow-xs bg-white rounded-lg border border-[#D0D5DD] px-3.5  justify-between">
          <input
            type="text"
            className="placeholder:text-[#667085] text-[16px] font-normal leading-6 border-none outline-none w-full py-2.5 text-[#1E1E1E]"
            placeholder="Type your message..."
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            value={newMessage}
          />
          <button
            className="flex flex-row gap-1.5 items-center font-semibold leading-5 text-sm text-[#475467]"
            onClick={handleSendMessage}
          >
            Send
            <Image src={sendIcon} alt="send Icon" width={20} height={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
