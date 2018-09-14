import React, { Component } from 'react';
import "./HomeStyle.css";
/*React Components*/
import SideNav from "./SideNav/SideNav";
import Dash from "./Pages/Dash/Dash.js";
import Articles from "./Pages/Articles/Articles.js";
class Home extends Component {
  constructor(){
    super();
    this.state = {
      primary_nav:"dash",
      secondary_nav:"",
    }
  }
  updatePrimNav = (new_primary_nav) => {
    this.setState({primary_nav:new_primary_nav});
  }
  updateSecNav = (new_secondary_nav) => {
    this.setState({secondary_nav:new_secondary_nav});
  }
  renderPage = () => {
    switch(this.state.primary_nav){
      case "dash":
        return <Dash />
      case "articles":
        return <Articles secondaryNav={this.state.secondary_nav} />
      default:
        return <Dash />
    }
  }
  render() {
    return (
        <section id="home">
            <SideNav currentPrimNav={this.state.primary_nav} updatePrimNav={this.updatePrimNav} updateSecNav={this.updateSecNav} />
            {this.renderPage()}
        </section>
    );
  }
}

export default Home;
