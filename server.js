import { Socket } from 'dgram';
import express from 'express';
// import ViteExpress from 'vite-express';
import http from 'http';
import { Server } from 'socket.io';
Server.Server;
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// app.get('/message', (_, res) => res.send('Hello from express!'));
io.on('connection', () => {
  console.log('we are connected');

  Socket.on('chat', (chat) => {
    io.emit('chat', chat);
  });

  Socket.on('disconnected', () => {
    console.log('disconnected');
  });
});
server.listen(app, 3000, () => console.log('Server is listening...'));
