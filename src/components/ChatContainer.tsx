import React, { useState } from 'react';
import ChatBox from './ChatBox';
import InputMessage from './InputMessage';

export default function ChatContainer(): React.JSX.Element {
  const [message, setMessage] = useState([{ sendBy: '', text: '', date: '' }]);

  //   useEffect(SetMessage(data), []);

  const handleClick = (inputMessage: string): void => {
    //send message to the database
    setMessage([
      ...message,
      {
        sendBy: 'Maria',
        text: inputMessage,
        date: '01-01-1990',
      },
    ]);
  };

  return (
    <div className="ChatContainer">
      <h2>Chat Container</h2>
      <ChatBox message={message} />
      <InputMessage handleClick={handleClick} />
    </div>
  );
}
