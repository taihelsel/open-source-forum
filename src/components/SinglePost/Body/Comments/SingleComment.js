import React, { Component } from 'react';

class SingleComment extends Component {
    render() {
        return (
            <div className="single-comment">
                <img className="comment-headshot" src={this.props.comment.img} alt="User picture"/>
                <h1 className="comment-author">{this.props.comment.author}</h1>
                <h2 className="comment-date">{this.props.comment.datePosted}</h2>
                <p className="comment-content">{this.props.comment.text}</p>
            </div>
        );
    }
}

export default SingleComment;
