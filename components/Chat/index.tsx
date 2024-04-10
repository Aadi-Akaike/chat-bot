"use client";
import { generateUniqueId } from "@/app/utils";
import React, { useEffect, useRef, useState } from "react";
interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface = () => {
  const initialMessages = [
    {
      text: "Hi! I'm RA.BOT, the Solar Education Assistant. How may I help you today?",
      isUser: false,
    },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const [hideInput, setHideInput] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    const uniqueId = generateUniqueId();
    setSessionId(uniqueId);
  }, []);

  const id = useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHideInput(true);
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

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage("");
      scrollToBottom("smooth");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

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
  }, []);
  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages.length]);

  return (
    <div className="h-full w-full bg-white flex flex-col overflow-y-hidden">
      <div
        className="h-full overflow-y-auto px-4 flex flex-col gap-4 py-6"
        ref={scrollableContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-center  ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            {!message.isUser && (
              <div className="mr-3 shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://static.thenounproject.com/png/1156284-200.png"
                  alt="Chat Bot"
                />
              </div>
            )}
            <div
              className={`rounded-lg px-3 py-2 max-w-lg ${
                message.isUser
                  ? "bg-gray-200 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              {message.text}
              <p>{sessionId}</p>
            </div>

            {message.isUser && (
              <div className="ml-3 shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                  alt="User"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-100 px-4 py-3 flex items-center">
        <input
          type="text"
          className="bg-white text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full"
          placeholder="Type your message..."
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          value={newMessage}
        />
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
