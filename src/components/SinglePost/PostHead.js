import React, { Component } from 'react';

class PostHead extends Component {
  render() {
    return (
      <div className="single-post-head">
        <img src={require("../.././media/images/stockphotos/camera.jpg")} alt="Image of a camera" />
        <div className="single-post-head-mask" />
        <h1 className="single-post-head-label">Camera Ipsum</h1>
        <ul className="post-info">
        <li>
            <img src={require("../.././media/images/icons/clock.png")}/>
            <h3>5/1/2018</h3>
          </li>
          <li>
            <img src={require("../.././media/images/icons/eye.png")}/>
            <h3>1.2k</h3>
          </li>
          <li>
            <img src={require("../.././media/images/icons/comment.png")}/>
            <h3>23</h3>
          </li>
        </ul>
      </div>
    );
  }
}

export default PostHead;
