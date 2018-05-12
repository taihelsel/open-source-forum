import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li className="moreauthor-post">
                <h1>{this.props.title}</h1>
                <img src={this.props.img}/>
                <div className="img-mask"></div>
            </li>
        );
    }
}

export default Post;
