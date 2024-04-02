import React from 'react';
// Array<messageData>
type obj = {
  inputMessage: string;
  user: string;
};

const ChatBoxReciever = ({ inputMessage, user }: obj): React.JSX.Element => {
  return (
    <div className="chatBotReciever">
      <p className="reciever">
        <strong>{user}</strong>
        <br></br>
        {inputMessage}
      </p>
    </div>
  );
};
export function ChatBoxSender({ inputMessage, user }: obj): React.JSX.Element {
  return (
    <div className="chatBotSender">
      <p className="sender">
        <strong>{user}</strong>
        <br></br>
        {inputMessage}
      </p>
    </div>
  );
}

// export function ChatBoxSender({ message, user }: obj): React.JSX.Element {
//   const listOfMessages = message.map((msg: messageData, index: number) => {
//     return (
//       <div key={index}>
//         <p>{msg.sendBy}</p>
//         <p>{msg.text}</p>
//         <p>{msg.date}</p>
//         <p>----</p>
//       </div>
//     );
//   });
//   return (
//     <div className="chatBotSender">
//       <p>
//         <strong>{user}</strong>
//       </p>
//       <br></br>
//       {listOfMessages}
//     </div>
//   );
// }
export default ChatBoxReciever;
