import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header.js";
import PostHead from "./PostHead.js";
import PostContent from "./PostContent.js";
import PostSidebar from "./SideBar/PostSidebar.js";
class SinglePost extends Component {
  render() {
    return (
        <section id="SinglePost">
            <Header />
            <hr className="head-divider" />
            <PostHead />
            <PostContent />
            <PostSidebar />
        </section>
    );
  }
}

export default SinglePost;
