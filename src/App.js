import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height= "100vh"   //how you want the chat to appear in the broswer
            projectID= "478b2fc3-dd71-4499-8c03-1050e710122e"    //a string once you create chat application 
            userName="CaptainAmerica"         // name of user 
            userSecret="1234" // password of user 
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
        />
    )
}

export default App;