"use client";
import React, { useEffect, useState } from "react";
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
    { text: "How can I return or exchange an item?", isUser: true },
    {
      text: "You can initiate a return or exchange by contacting our customer support team within 30 days of receiving your order.",
      isUser: false,
    },
    { text: "Are there any discounts available?", isUser: true },
    {
      text: "We occasionally offer discounts and promotions to our customers. Make sure to subscribe to our newsletter to stay updated.",
      isUser: false,
    },
    { text: "Thank you for your assistance!", isUser: true },
    {
      text: "You're welcome! If you have any more questions, feel free to ask.",
      isUser: false,
    },
    { text: "Goodbye!", isUser: true },
    { text: "Goodbye! Have a great day!", isUser: false },
  ];
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="h-full w-full bg-white flex flex-col">
      {/* Chat Header */}
      <div className="bg-gray-800 text-white px-4 py-3">
        <h1 className="text-lg font-semibold">Chat Bot</h1>
      </div>

      {/* Chat Messages */}
      <div className="h-full overflow-y-auto px-4 flex flex-col gap-4 py-6">
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

      {/* Chat Input */}
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
