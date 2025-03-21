import { useState } from "react";
import { useChatStore } from "../store/ChatStore";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { messages, sendMessage } = useChatStore();

  const handleSend = () => {
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <div className="h-64 overflow-y-auto border p-2 bg-white">
        {messages.map((msg, index) => (
          <div key={index} className="p-2 border-b">{msg}</div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded" onClick={handleSend}>
          Sent.
        </button>
      </div>
    </div>
  );
};

export default Chat;
