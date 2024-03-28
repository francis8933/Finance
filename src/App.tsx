import { useState } from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';
import UserLogin from './components/UserLogin';

function App() {
  const [user, setUser] = useState('');

  const handleSubmit = (e: React.SyntheticEvent, email: string) => {
    e.preventDefault();
    setUser(email);
    console.log('user', user);
  };

  return (
    <div>
      <UserLogin handleSubmit={handleSubmit} />
      <p>---------------------</p>
      <h1>Chat</h1>
      <ChatContainer user={user} />
    </div>
  );
}

export default App;
