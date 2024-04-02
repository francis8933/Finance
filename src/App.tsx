import { useState } from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';
import UserLogin from './components/UserLogin';

function App() {
  const [user, setUser] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    console.log('email', email);
    setUser(email);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser('');
  };
  return (
    <div className="app">
      <h1>SuperChat</h1>
      {user !== '' ? (
        <ChatContainer user={user} logOut={logOut} />
      ) : (
        <UserLogin handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
