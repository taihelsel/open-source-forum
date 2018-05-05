import React, { Component } from 'react';

class PostHead extends Component {
  render() {
    return (
            
            <div className="single-post-head">
              <img src={require("../.././media/images/stockphotos/camera.jpg")} alt="Image of a camera" />
              <div className="single-post-head-mask" />
              <h1 className="single-post-head-label">Camera Ipsum</h1>
            </div>
    );
  }
}

export default PostHead;
