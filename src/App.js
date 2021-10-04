import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ShowChats from './components/ShowChats'

function App() {

  const [chatText, setChatText] = useState("")

  const onTextChange = (event) => {
    setChatText(event.target.value)
  }

  const handleSubmitEvent = (event) => {
    event.preventDefault()
    console.log(chatText)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "body": chatText,
        "avatar_id": "6"
      })
    }

    fetch('http://localhost:8000/post', requestOptions)
      .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const data = isJson && await response.json();

          // check for error response
          if (!response.ok) {
              // get error message from body or default to response status
              const error = (data && data.message) || response.status;
              return Promise.reject(error);
          }
          console.log(response)
      })
      .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
  }

  return (
    <div className="App container" >
      <p>Chat</p>
      <div>
        <ShowChats />
      </div>
      <div>
        {/* <form > */}
          <input className="chat-text-container" value={chatText} onChange={onTextChange} ></input>  
          <button type="submit" onClick={handleSubmitEvent}>Submit</button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default App;
