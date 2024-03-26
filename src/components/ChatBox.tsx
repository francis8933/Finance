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

export default function ChatBox({ message }: obj): React.JSX.Element {
  const listOfMessages = message.map((msg: messageData) => {
    return (
      <div>
        <p>{msg.sendBy}</p>;<p>{msg.text}</p>
        <p>{msg.date}</p>
      </div>
    );
  });
  return <div>{listOfMessages}</div>;
}
