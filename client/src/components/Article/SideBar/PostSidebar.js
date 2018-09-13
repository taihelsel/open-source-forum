import React, { Component } from 'react';
/*ReactComponents*/
import Explorer from "./Explorer/Explorer.js";
import MoreFromAuthor from "./MoreFromAuthor/MoreFromAuthor.js";
class PostSidebar extends Component {
  render() {
    return (
      <div id="PostSidebar">
        <Explorer tags={this.props.tags} />
        <div className="sidebar-ad">
          <a href="http://example.com" target="_blank">
            <img src={"http://via.placeholder.com/350x150?text=Your+ad+here"} />
          </a>
        </div>
        <MoreFromAuthor authorname={"jane doe"} authorposts={[{ primarytag: "Technology", title: "HTML5 Tricks", img: require("../../.././media/images/stockphotos/code.jpg") }, { primarytag: "Travel", title: "Hiking Washington", img: require("../../.././media/images/stockphotos/hiking.jpg") }, { primarytag: "DIY", title: "10 DIY Things", img: require("../../.././media/images/stockphotos/DIY.jpg") }]} />
      </div>
    );
  }
}

export default PostSidebar;
