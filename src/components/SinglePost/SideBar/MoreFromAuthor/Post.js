import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li className="moreauthor-post">
                <h1 className="post-tag">{this.props.primarytag}</h1>
                <h1 className="post-title">{this.props.title}</h1>
                <img src={this.props.img}/>
                <div className="img-mask"></div>
            </li>
        );
    }
}

export default Post;
