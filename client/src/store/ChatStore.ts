import { create } from "zustand";

interface Message {
  sender: string;
  content: string;
  timestamp: number;
}

interface ChatStore {
  messages: Message[];
  addMessage: (message: Message) => void;
  sendMessage: (messageContent: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  sendMessage: (messageContent) => {
    const newMessage: Message = {
      sender: 'User', //sender
      content: messageContent,
      timestamp: Date.now(),
    };
    set((state) => ({ messages: [...state.messages, newMessage] }));
  },
}));
