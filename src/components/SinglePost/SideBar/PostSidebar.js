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
          <MoreFromAuthor authorname={"jane doe"} authorposts={[{primarytag:"Technology",title:"HTML5 Tricks",img:require("../../.././media/images/stockphotos/code.jpg")},{primarytag:"Travel",title:"Hiking Washington",img:require("../../.././media/images/stockphotos/hiking.jpg")},{primarytag:"DIY",title:"10 DIY Things",img:require("../../.././media/images/stockphotos/DIY.jpg")}]} />
        </div>
    );
  }
}

export default PostSidebar;
