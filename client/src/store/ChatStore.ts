import { create } from "zustand";

interface ChatStore {
  messages: string[];
  sendMessage: (message: string) => void;
  receiveMessage: (message: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  sendMessage: (message) => {
    set((state) => ({ messages: [...state.messages, `You: ${message}`] }));
    // here add WebSocket sebd logic.
  },
  receiveMessage: (message) => {
    set((state) => ({ messages: [...state.messages, `Received: ${message}`] }));
  },
}));
