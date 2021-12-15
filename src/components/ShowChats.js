import React from 'react';
import { useState, useEffect } from 'react';
import Post from './Post'

function ShowChats() {
    
    const [posts, setPosts] = useState([])
    const [chatText, setChatText] = useState("")
    const url = "http://localhost:8000/posts?sort=asc"

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

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(url)
                const json = await response.json()
                return json.map((post) => {
                    return <Post key={post._id} post={post}></Post>
                })
                
            } catch (error) {
                
            }
        }

        fetchData()
        .then(posts => setPosts(posts))
        .catch((err) => console.log(err))
        
    }, [])

    return (
        <div className="message-list-container">
            <ul className="message-list">{posts}</ul>
            {/* show if the user is a write user */}
            <div>
                <textarea className="chat-text-container" value={chatText} onChange={onTextChange} ></textarea>
            </div>
            <div>
                <button className="send-msg" type="submit" onClick={handleSubmitEvent}>Submit</button>
            </div>
        </div>
    )
    
}

export default ShowChats;