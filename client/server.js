import { WebSocketServer } from 'ws';
import http from 'http';

//Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server is running\n');
});

//Create a WebSocket server and listen on port 3001
const wss = new WebSocketServer({ server });

//Monitor connection events
wss.on('connection', (ws) => {
  console.log('A new client connected');

  //Monitor the messages sent by the client
  ws.on('message', (message) => {
    console.log('received: %s', message);
    //Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(message);
      }
    });
  });

  //Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');
});

//Start the server and listen on port 3001
server.listen(3001, '0.0.0.0', () => {
  console.log('WebSocket server is listening on ws://0.0.0.0:3001');
});
