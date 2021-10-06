import React, {useEffect} from 'react'

function Avatar(props) {

    const { id, image } = props;
    const onAvatarSelect = () => {
        // make a fetch call to post the access request
    }


    return (
        <li>
            <img src={image} alt={`avatar ${id}`} className="avatar" width="120px" height="120px" 
            onClick={onAvatarSelect}/>
        </li>
    )
}

export default Avatar

