import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header.js";
class SinglePost extends Component {
  render() {
    return (
        <section id="SinglePost">
            <Header />
            <hr className="head-divider" />
            <div className="single-post-head">
              <img src={require("../.././media/images/stockphotos/camera.jpg")} alt="Image of a camera" />
              <div className="single-post-head-mask" />
              <h1 className="single-post-head-label">Camera Ipsum</h1>
            </div>
        </section>
    );
  }
}

export default SinglePost;
