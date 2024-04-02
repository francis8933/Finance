import React, { useState } from 'react';

type obj = {
  addMessage: (message: string) => void;
};
const InputMessage = ({ addMessage }: obj): JSX.Element => {
  const [inputMenssage, setInputMessage] = useState('');

  const handleChange = (e: React.SyntheticEvent) => {
    console.log('getting in handleChange', e);
    const target = e.target as HTMLInputElement;
    setInputMessage(target.value);
  };

  return (
    <div>
      <input name="inputText" onChange={handleChange} value={inputMenssage} />
      <button
        onClick={() => {
          addMessage(inputMenssage);
          setInputMessage('');
        }}
      >
        Send
      </button>
    </div>
  );
};
export default InputMessage;
