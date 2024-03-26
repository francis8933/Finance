import React, { useState } from 'react';
import ChatBox from './ChatBox';
import InputMessage from './InputMessage';

export default function ChatContainer(): React.JSX.Element {
  const [message, setMessage] = useState([]);

  //   useEffect(SetMessage(data), []);

  const handleClick = (inputMessage: string): void => {
    //send message to the database
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
