import React, { Component } from 'react';
/*React Components*/
import SubNav from "./SubNav.js";
class SideNav extends Component {
  changeNav = (e) => {
    if(e.currentTarget.id !== "selected-snav"){
      document.getElementById("selected-snav").removeAttribute("id");
      e.currentTarget.setAttribute("id","selected-snav");
      this.props.updatePrimNav(e.currentTarget.innerText.toLowerCase());
    }
  }
  render() {
    return (
      <div id="side-nav">
        <ul className="primary">
          <li id="selected-snav" onClick={this.changeNav} >Dash</li>
          <li onClick={this.changeNav} >Articles</li>
          <li onClick={this.changeNav} >Logout</li>
        </ul>
        <SubNav selectedNav={this.props.currentPrimNav}/>
      </div>
    );
  }
}

export default SideNav;
