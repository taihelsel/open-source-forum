import React, { Component } from 'react';

class CommentsForm extends Component {
    render() {
        return (
            <form id="comments-form">
                <hr />
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
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default CommentsForm;
