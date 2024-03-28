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
  let KeyNumber = 0;

  const listOfMessages = message.map((msg: messageData) => {
    KeyNumber++;
    return (
      <div key={KeyNumber}>
        <p>{msg.sendBy}</p>
        <p>{msg.text}</p>
        <p>{msg.date}</p>
        <p>----</p>
      </div>
    );
  });
  return <div>{listOfMessages}</div>;
}
