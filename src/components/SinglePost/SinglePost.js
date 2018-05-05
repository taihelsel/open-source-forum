import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header.js";
import PostHead from "./PostHead.js";
class SinglePost extends Component {
  render() {
    return (
        <section id="SinglePost">
            <Header />
            <hr className="head-divider" />
            <PostHead />
        </section>
    );
  }
}

export default SinglePost;
