import { useEffect } from "react";
import { useChatStore } from "../store/ChatStore.ts";

const useWebSocket = (url: string) => {
  const addMessage = useChatStore(state => state.addMessage);

  useEffect(() => {
    const ws = new WebSocket("wss://perception-released-export-passengers.trycloudflare.com");

    ws.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data); // Ensure the message is valid JSON
        addMessage(message); // Update message to store
      } catch (error) {
        console.error('Failed to parse WebSocket message:', event.data);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      ws.close();
    };
  }, [url, addMessage]);
};

export default useWebSocket;
