import { useState } from 'react';
import ChatBox from './ChatBox';
import InputMessage from './InputMessage';

type obj = {
  user: string;
};
const ChatContainer = (user: obj): JSX.Element => {
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
      <h3>Current User: {user.user}</h3>
      <ChatBox message={message} />
      <InputMessage handleClick={handleClick} />
    </div>
  );
};
export default ChatContainer;
