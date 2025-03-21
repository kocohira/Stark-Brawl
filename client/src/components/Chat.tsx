import React from 'react';
import MessagesList from './MessagesList';
import MessageInput from './MessageInput';

const Chat = () => {
  return (
    <div className="chat-container">
      <MessagesList /> {/* display message list */}
      <MessageInput /> {/* display input frame */}
    </div>
  );
};

export default Chat;
