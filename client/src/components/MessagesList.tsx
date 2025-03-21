import React from 'react';
import { useChatStore } from '../store/ChatStore'; // import ChatStore to manage status
import MessageItem from './MessageItem'; // import message components

const MessagesList = () => {
  const messages = useChatStore(state => state.messages);

  return (
    <div className="messages-list">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessagesList;
