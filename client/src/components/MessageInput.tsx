import React, { useState } from 'react';
import { useChatStore } from '../store/ChatStore';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const sendMessage = ChatStore(state => state.sendMessage); //use ChatStore to send message

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message); //send message to ChatStore
      setMessage(''); //clear input
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
