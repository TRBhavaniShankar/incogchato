import React, {useEffect, useState} from 'react'
import Avatar from './Avatar'

function AvatarsComponent(props) {

    const [avatars, setAvatars] = useState([])

    useEffect(() => {
        
        let avatars = []
        let avatarsSrc = {
            "1": process.env.PUBLIC_URL + '/avatars/1.jpg',
            "2": process.env.PUBLIC_URL + '/avatars/2.jpg',
            "3": process.env.PUBLIC_URL + '/avatars/3.jpg',
            "4": process.env.PUBLIC_URL + 'avatars/4.jpg',
            "5": process.env.PUBLIC_URL + '/avatars/5.jpg'
        }

        for (const avatar in avatarsSrc) {
            avatars.push(
                <Avatar key={avatar} id = {avatar} image={avatarsSrc[avatar]} />
            )
        }

        setAvatars(avatars)

    }, [])

    return (
        <div className="avatars-container">
            <h1>Welcome to IncogChato</h1>
            <p>Please select one of the below avatars to start chatting!</p>
            <ul className="avatar-list">{avatars}</ul>
        </div>
    )
}

export default AvatarsComponent

