import React, { Component } from 'react';

class CommentsForm extends Component {
    render() {
        return (
            <form id="comments-form">
                <h1 className="comments-head">Leave a Reply</h1>
                <div className="comment-input">
                    <h3>* Name:</h3>
                    <input type="text" required />
                </div>
                <div className="comment-input">
                    <h3>* Email:</h3>
                    <input type="text" required />
                </div>
                <div className="comment-input">
                    <h3>Website:</h3>
                    <input type="text" />
                </div>
                <div className="comment-text">
                    <textarea placeHolder="Comment..."/>
                </div>
                <button type="submit">Post Comment</button>
            </form>
        );
    }
}

export default CommentsForm;
