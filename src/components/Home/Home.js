import React, { Component } from 'react';

/*React Components*/
import Header from ".././Header.js";
import Highlights from "./Highlights.js";
class Home extends Component {
  render() {
    return (
        <section id="Home" >
            <Header />
            <Highlights />
        </section>
    );
  }
}

export default Home;
