import React, { Component } from 'react';
class PostPreview extends Component {
  render() {
    return (
        <li className="post-preview" >
            <img src={this.props.src} alt=""/>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
            <div className="post-preview-footer">
              <a href="">Keep Reading...</a>
            </div>
        </li>
    );
  }
}

export default PostPreview;
