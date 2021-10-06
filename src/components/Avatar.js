import React from 'react'

function Avatar(props) {

    const { id, image } = props;

    return (
        <li>
            <img src={image} alt={`avatar ${id}`} className="avatar" width="100px" height="100px"/>
        </li>
    )
}

export default Avatar

