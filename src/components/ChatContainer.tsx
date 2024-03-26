import React, { useEffect, useState } from 'react';
import ChatBox from './ChatBox';
import InputMessage from './InputMessage';

export default function ChatContainer(): React.JSX.Element {
  const [message, setMessage] = useState([{ sendBy: '', text: '', date: '' }]);

  //   useEffect(SetMessage(data), []);

  const handleClick = (inputMessage) => {
    //send message to the database
    e.preventDefault();
    console.log('the msg is', inputMessage);
  };

  return (
    <div className="ChatContainer">
      <h2>Chat Container</h2>
      <ChatBox message={message} />
      <InputMessage handleClick={handleClick} />
    </div>
  );
}
