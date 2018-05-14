import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class PostPreview extends Component {
  render() {
    return (
        <li className="post-preview" >
            <img src={this.props.src} alt=""/>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            <div className="post-preview-footer">
              <Link to={"/posts/test"}>Keep Reading...</Link>
            </div>
        </li>
    );
  }
}

export default PostPreview;
