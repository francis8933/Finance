import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// app.get('/message', (_, res) => res.send('Hello from express!'));
io.on('connection', (socket) => {
  console.log('we are connected');

  socket.on('chat', (chat) => {
    io.emit('chat', chat);
  });

  socket.on('disconnected', () => {
    console.log('disconnected');
  });
});
server.listen(app, 3000, () => console.log('Server is listening...'));
