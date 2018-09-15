import React, { Component } from 'react';

/*React Components*/
import Home from "../Home/Home.js";
import Login from "../Login/Login.js";
class BloggerCMS extends Component {
  constructor(){
    super();
    this.state = {
      session_user:null
    }
  }
  render() {
    return this.state.session_user?(
        <div>
            <Home/>
        </div>
    ):(
      <Login/>
    )
  }
}

export default BloggerCMS;
