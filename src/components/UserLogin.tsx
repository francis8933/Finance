import { useState } from 'react';

type obj = {
  handleSubmit: (e: React.SyntheticEvent, email: string) => void;
};

const UserLogin = ({ handleSubmit }: obj): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: React.SyntheticEvent, passW: string) => {
    const target = e.target as HTMLInputElement;
    if (passW === 'password') setPassword(target.value);
    else setEmail(target.value);
  };

  return (
    <div>
      <form>
        <label>
          email:{' '}
          <input
            type="text"
            value={email}
            onChange={(e) => handleChange(e, 'email')}
          ></input>
        </label>
        <label>
          Password:{' '}
          <input
            type="text"
            value={password}
            onChange={(e) => handleChange(e, 'password')}
          ></input>
        </label>
        <button
          onClick={(e) => {
            handleSubmit(e, email);
          }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};
export default UserLogin;
