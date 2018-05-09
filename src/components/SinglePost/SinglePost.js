import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header.js";
import PostHead from "./PostHead.js";
import Article from "./Body/Article.js";
import AuthorAbout from "./Body/AuthorAbout";
import Related from  "./Body/Related.js";
import PostSidebar from "./SideBar/PostSidebar.js";
class SinglePost extends Component {
  render() {
    return (
        <section id="SinglePost">
            <Header />
            <hr className="head-divider" />
            <PostHead />
            <PostSidebar />
            <Article />
            <AuthorAbout />
            <Related />
        </section>
    );
  }
}

export default SinglePost;
