import React, { Component } from 'react';

class SingleComment extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.comment.author}</h1>
                <h1>{this.props.comment.datePosted}</h1>
                <h1>{this.props.comment.text}</h1>
            </div>
        );
    }
}

export default SingleComment;
