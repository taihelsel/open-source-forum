import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header/Header.js";
import Highlights from "./Highlights.js";
import BlogPosts from "./BlogPosts.js";
class Home extends Component {
  render() {
    return (
        <section id="Home" >
            <Header />
            <Highlights />
            <BlogPosts />
        </section>
    );
  }
}

export default Home;
