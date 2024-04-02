import React from 'react';

type obj = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const UserLogin = ({ handleSubmit }: obj): JSX.Element => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          email: <input type="text" name="email" defaultValue={''}></input>
        </label>
        <label>
          Password:{' '}
          <input type="text" name="password" defaultValue={''}></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default UserLogin;
