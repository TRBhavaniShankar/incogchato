import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ShowChats from './components/ShowChats'
import AvatarsComponent from './components/AvatarsComponent'

function App() {

  const [hasUser, setHasUser] = useState(null)
  const [isWriteUser, setIsWriteUser] = useState(false)

  useEffect(() => {
    
    

  }, [])

  return (
    <div className="App container">

      {/* if there is no write chatter. This will be push notification */}
      {/* {(hasUser !== null && !hasUser) &&  <AvatarsComponent />} */}
      <AvatarsComponent />
      
      {/* wait until we check whether to show avatar or chats */}
      {/* {(hasUser !== null && hasUser) && <ShowChats />} */}
      <ShowChats />

      {/* while the side effect for checking the user */}
      {/* {(hasUser === null) && <p>Loading..</p>} */}
      
    </div>
  );
}

export default App;
