import React from 'react'

function Post(props) {

    return (
        <li>
            <div className="post">
                <div>{props.post.body}</div>
                <div>{props.post.created_at}</div>
            </div>
        </li>
    )
}

export default Post

