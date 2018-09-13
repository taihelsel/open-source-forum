import React from 'react';

const SingleComment = (props) => (
    <div className="single-comment">
        <img className="comment-headshot" src={props.comment.img} alt="User picture" />
        <h1 className="comment-author">{props.comment.author}</h1>
        <h2 className="comment-date">{props.comment.datePosted}</h2>
        <p className="comment-content">{props.comment.text}</p>
    </div>
);

export default SingleComment;
