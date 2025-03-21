import MessagesList from './MessagesList.tsx';
import MessageInput from './MessageInput.tsx';

const Chat = () => {
  return (
    <div className="chat-container">
      <MessagesList /> {/* display message list */}
      <MessageInput /> {/* display input frame */}
    </div>
  );
};

export default Chat;
