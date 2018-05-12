import React, { Component } from 'react';
/*ReactComponents*/
import Explorer from "./Explorer/Explorer.js";
import Advertisement from "./Advertisement.js";
class PostSidebar extends Component {
  render() {
    return (
        <div id="PostSidebar">
          <Explorer />
          <Advertisement adImg={"http://via.placeholder.com/350x150?text=Your+ad+here"}/>
        </div>
    );
  }
}

export default PostSidebar;
