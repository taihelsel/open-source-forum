import React, { Component } from 'react';
/*ReactComponents*/
import Explorer from "./Explorer/Explorer.js";
import Advertisement from "./Advertisement.js";
import MoreFromAuthor from "./MoreFromAuthor/MoreFromAuthor.js";
class PostSidebar extends Component {
  render() {
    return (
        <div id="PostSidebar">
          <Explorer />
          <Advertisement adImg={"http://via.placeholder.com/350x150?text=Your+ad+here"}/>
          <MoreFromAuthor authorname={"jane doe"} authorposts={[{title:"lorem ipsum",img:require("../../.././media/images/stockphotos/camera.jpg")},{title:"lorem ipsum",img:require("../../.././media/images/stockphotos/camera.jpg")},{title:"lorem ipsum",img:require("../../.././media/images/stockphotos/camera.jpg")}]} />
        </div>
    );
  }
}

export default PostSidebar;
