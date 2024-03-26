import React, { useState } from 'react';

export default function InputMessage(handleClick: React.FC): React.JSX.Element {
  const [inputMenssage, setInputMessage] = useState('');

  const handleChange = (e: React.SyntheticEvent) => {
    console.log('getting in handleChange', e);
    setInputMessage('Hello');
  };

  return (
    <div>
      <input name="inputText" onChange={handleChange} value={inputMenssage} />
      <button onClick={() => handleClick(inputMenssage)}>Send</button>
    </div>
  );
}
