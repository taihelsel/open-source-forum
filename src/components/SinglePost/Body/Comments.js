import React, { Component } from 'react';

/*React Components*/
import CommentsForm from "./CommentsForm.js";
class Comments extends Component {
    render() {
        if (this.props.comments.length < 1) {
            return (
                <div id="Comments">
                    <h1 className="comments-head">No Comments</h1>
                    <CommentsForm />
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
                    <CommentsForm />
                </div>
            );
        }
    }
}

export default Comments;
