import React, { Component } from 'react';
/*ReactComponents*/
import Explorer from "./Explorer/Explorer.js";
import Advertisement from "./Advertisement.js";
class PostSidebar extends Component {
  render() {
    return (
        <div id="PostSidebar">
          <Explorer />
          <Advertisement />
        </div>
    );
  }
}

export default PostSidebar;
