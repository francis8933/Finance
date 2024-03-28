import React, { useState } from 'react';

type obj = {
  handleClick: (message: string) => void;
};
const InputMessage = ({ handleClick }: obj): JSX.Element => {
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
          handleClick(inputMenssage);
          setInputMessage('');
        }}
      >
        Send
      </button>
    </div>
  );
};
export default InputMessage;
