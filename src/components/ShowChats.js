import React from 'react';
import { useState, useEffect } from 'react';
import Post from './Post'

function ShowChats() {
    
    const [posts, setPosts] = useState([])
    const url = "http://localhost:8000/posts?sort=asc"

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await fetch(url)
                const json = await response.json()
                return json.map((post) => {
                    return <Post post={post}></Post>
                })
                
            } catch (error) {
                
            }
        }

        fetchData()
        .then(posts => setPosts(posts))
        .catch((err) => console.log(err))
        
    }, [])

    return (
        <div>
            <ul>{posts}</ul>
        </div>
    )
    
}

export default ShowChats;