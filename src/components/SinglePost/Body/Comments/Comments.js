import React, { Component } from 'react';

/*React Components*/
import CommentsForm from "./CommentsForm.js";
import SingleComment from "./SingleComment.js";
class Comments extends Component {
    render() {
        let commentsHeadTxt = "No Comments";
        if(this.props.comments.length>0){
            commentsHeadTxt = this.props.comments.length + " Comments";
        }
        return(
        <div id="Comments">
            <h1 className="comments-head">
                {commentsHeadTxt}
            </h1>
            <div className="comments-wrapper">
                {this.props.comments.map((item) => {
                    return <SingleComment comment={item} />
                })
                }
            </div>
            <CommentsForm />
        </div>
        );
    }
}

export default Comments;
