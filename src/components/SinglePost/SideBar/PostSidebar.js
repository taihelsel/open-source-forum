import React, { Component } from 'react';
/*ReactComponents*/
import Explorer from "./Explorer/Explorer.js";
class PostSidebar extends Component {
  render() {
    return (
        <div id="PostSidebar">
          <input className="sidebar-search" type="text" placeholder="Search"/>
          <Explorer />
        </div>
    );
  }
}

export default PostSidebar;
