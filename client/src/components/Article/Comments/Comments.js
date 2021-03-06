import React from 'react';

/*React Components*/
import CommentsForm from "./CommentsForm.js";
import SingleComment from "./SingleComment.js";
const Comments = (props) => {
    let commentsHeadTxt = "No Comments";
    if (props.comments.length > 0) {
        commentsHeadTxt = props.comments.length + " Comments";
    }
    return (
        <div id="Comments">
            <h1 className="body-divider">Comments</h1>
            <h1 className="comments-head">
                {commentsHeadTxt}
            </h1>
            <div className="comments-wrapper">
                {props.comments.map((item) => {
                    return <SingleComment comment={item} />
                })
                }
            </div>
            <CommentsForm />
        </div>
    );
}

export default Comments;
