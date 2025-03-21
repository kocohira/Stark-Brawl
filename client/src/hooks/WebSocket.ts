import { useEffect } from "react";
import { useChatStore } from "../store/ChatStore";

const useWebSocket = (url: string) => {
  const addMessage = useChatStore(state => state.addMessage);

  useEffect(() => {
    const ws = new WebSocket("ws://156.231.111.65:3001"); // here change to real WebSocket server address.

    ws.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      addMessage(message); // update message to store
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
