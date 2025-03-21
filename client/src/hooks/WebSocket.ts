import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";

export const useWebSocket = () => {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001"); // here change to WebSocket server address.(local)

    ws.onmessage = (event) => {
      useChatStore.getState().receiveMessage(event.data);
    };

    return () => {
      ws.close();
    };
  }, []);
};
