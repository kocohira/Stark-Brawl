interface Message {
  sender: string;
  content: string;
  timestamp: number;
}

const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
  const formattedTime = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div className="message-item">
      <div className="message-header">
        <span className="sender">{message.sender}</span>
        <span className="timestamp">{formattedTime}</span>
      </div>
      <div className="message-content">
        {message.content}
      </div>
    </div>
  );
};

export default MessageItem;
