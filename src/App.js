import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '6282d6d6-97ab-4472-818c-eebb215fe7d7';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
    height='100vh'
    userName='Ernie'
    userSecret='digitalcraft2'
    projectID='6282d6d6-97ab-4472-818c-eebb215fe7d7'
/>
  );
};

// infinite scroll, logout, more customizations...

export default App;