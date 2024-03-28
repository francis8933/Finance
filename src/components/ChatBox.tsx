import React from 'react';
// Array<messageData>
type obj = {
  message: Array<messageData>;
};
type messageData = {
  sendBy: string;
  text: string;
  date: string;
};

const ChatBox = ({ message }: obj): React.JSX.Element => {
  const listOfMessages = message.map((msg: messageData, index: number) => {
    return (
      <div key={index}>
        <p>{msg.sendBy}</p>
        <p>{msg.text}</p>
        <p>{msg.date}</p>
        <p>----</p>
      </div>
    );
  });
  return <div>{listOfMessages}</div>;
};
export default ChatBox;
