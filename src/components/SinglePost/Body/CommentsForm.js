import React, { Component } from 'react';

class CommentsForm extends Component {
    render() {
        return (
            <form id="comments-form">
                <div className="comment-input">
                    <label>Name: *</label>
                    <input type="text" />
                </div>
                <div className="comment-input">
                    <label>Email: *</label>
                    <input type="text" />
                </div>
                <div className="comment-input">
                    <label>Website</label>
                    <input type="text" />
                </div>
                <button type="submit"></button>
            </form>
        );
    }
}

export default CommentsForm;
