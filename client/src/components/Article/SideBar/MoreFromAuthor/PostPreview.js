import React from 'react';

const PostPreview = (props) => {
    return (
        <li className="moreauthor-post">
            <h1 className="post-tag">{props.primarytag}</h1>
            <h1 className="post-title">{props.title}</h1>
            <img src={props.img} />
            <div className="img-mask"></div>
        </li>
    );
}

export default PostPreview;
