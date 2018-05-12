import React, { Component } from 'react';

class Comments extends Component {
    render() {
        if (this.props.comments.length < 1) {
            return (
                <div id="Comments">
                    <h1 className="comments-head">No Comments</h1>
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
                </div>
            );
        } else {
            return (
                <div id="Comments">
                    <h1 className="comments-head">
                        {this.props.comments.length} Comments
                    </h1>
                    <div className="comments-wrapper">
                        {this.props.comments.map((comment) => {
                            return (
                                <div>
                                    <h1>{comment.author}</h1>
                                    <h1>{comment.datePosted}</h1>
                                    <h1>{comment.text}</h1>
                                </div>
                            )
                        })
                        }
                    </div>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        }
    }
}

export default Comments;
