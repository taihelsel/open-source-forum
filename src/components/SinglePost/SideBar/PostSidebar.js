import React, { Component } from 'react';
/*ReactComponents*/
import ExplorerNav from "./Explorer/ExplorerNav.js";
class PostSidebar extends Component {
  render() {
    return (
        <div id="PostSidebar">
          <ExplorerNav />
        </div>
    );
  }
}

export default PostSidebar;
