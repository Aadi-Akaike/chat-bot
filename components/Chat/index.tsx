"use client";
import React, { useEffect, useRef, useState } from "react";
interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface = () => {
  const initialMessages = [
    { text: "Hello! How can I help you today?", isUser: true },
    { text: "Sure! What do you need assistance with?", isUser: false },
    {
      text: "Can you provide more information about your products?",
      isUser: true,
    },
    {
      text: "Certainly! We have a wide range of products including electronics, clothing, and accessories.",
      isUser: false,
    },
    { text: "Do you offer international shipping?", isUser: true },
    {
      text: "Yes, we offer international shipping to most countries.",
      isUser: false,
    },
    { text: "How long does shipping usually take?", isUser: true },
    {
      text: "Shipping times vary depending on the destination. Typically, it takes 5-7 business days for domestic orders and 7-14 business days for international orders.",
      isUser: false,
    },
    { text: "What payment methods do you accept?", isUser: true },
    {
      text: "We accept credit cards, PayPal, and bank transfers.",
      isUser: false,
    },
    { text: "Is there a warranty on your products?", isUser: true },
    {
      text: "Yes, all our products come with a standard one-year warranty.",
      isUser: false,
    },
  ];
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");

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
