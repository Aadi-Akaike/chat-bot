import React from "react";

const ChatInterface = () => {
  return (
    <div className="bg-white flex flex-col h-full w-full">
      {/* Chat Header */}
      <div className="bg-gray-800 text-white px-4 py-3 mb-3">
        <h1 className="text-lg font-semibold">Chat Bot</h1>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User"
            />
          </div>
          <div className="ml-3">
            <div className="bg-gray-200 text-gray-800 rounded-lg px-3 py-2 max-w-xs">
              Hello! How can I help you today?
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mb-3">
          <div className="mr-3">
            <div className="bg-blue-500 text-white rounded-lg px-3 py-2 max-w-xs">
              Sure! What do you need assistance with?
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Chat Bot"
            />
          </div>
        </div>

        {/* Add more messages here */}
        <div className="flex items-center mb-3">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="User"
            />
          </div>
          <div className="ml-3">
            <div className="bg-gray-200 text-gray-800 rounded-lg px-3 py-2 max-w-xs">
              Can you provide more information about your products?
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mb-3">
          <div className="mr-3">
            <div className="bg-blue-500 text-white rounded-lg px-3 py-2 max-w-xs">
              Certainly! We have a wide range of products including electronics,
              clothing, and accessories.
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Chat Bot"
            />
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="bg-gray-100 px-4 py-3 flex items-center">
        <input
          type="text"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 w-full"
          placeholder="Type your message..."
        />
        <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
