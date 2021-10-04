import React from 'react'

function Post(props) {

    return (
        <li key={props.post._id}>{props.post.body}</li>
    )
}

export default Post

