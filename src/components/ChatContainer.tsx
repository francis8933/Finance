import { useEffect, useState } from 'react';
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputMessage from './InputMessage';
import { io } from 'socket.io-client';

type obj = {
  user: string;
  logOut: () => void;
};
type messageData = {
  sendBy: string;
  text: string;
  date: string;
};
const ChatContainer = ({ user, logOut }: obj): JSX.Element => {
  const sockteio = io('http://localhost:3000/', {
    transports: ['websocket'],
  });

  sockteio.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  const [message, setMessage] = useState([{ sendBy: '', text: '', date: '' }]);

  useEffect(() => {
    sockteio.on('chat', (senderChat) => {
      setMessage(senderChat);
    });
  });

  const sendChatToSocket = (
    chat: Array<{ sendBy: string; text: string; date: string }>
  ) => {
    sockteio.emit('chat', chat);
  };

  const addMessage = (inputMessage: string): void => {
    //send message to the database

    setMessage([
      ...message,
      {
        sendBy: user,
        text: inputMessage,
        date: '01-01-1990',
      },
    ]);
    sendChatToSocket([
      ...message,
      {
        sendBy: user,
        text: inputMessage,
        date: '01-01-1990',
      },
    ]);
  };

  const MessageList = () => {
    return message.map((msg: messageData, index: number) => {
      if (msg.sendBy === user)
        return (
          <ChatBoxSender
            key={index}
            inputMessage={msg.text}
            user={msg.sendBy}
          />
        );
      return (
        <ChatBoxReciever
          key={index}
          inputMessage={msg.text}
          user={msg.sendBy}
        />
      );
    });
  };

  return (
    <div>
      <h3>User Name: {user}</h3>
      <button onClick={logOut}>Log Out</button>
      <MessageList />
      <InputMessage addMessage={addMessage} />
    </div>
  );
};
export default ChatContainer;
