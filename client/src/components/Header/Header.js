import React, { Component } from 'react';

/*React Components*/
import TopNav from "./TopNav.js";
import CollapsibleNav from "./CollapsibleNav.js";
class Header extends Component {
    constructor() {
        super();
        this.state = {
            showCollapsibleNav: false,
        }
    }
    handleHamburgerClick = (e) => {
        if (this.state.showCollapsibleNav) {
            /*
            Convert hamburger menu to original state and hide CollapsibleNav
            */
            e.currentTarget.classList.remove("hamburger-btn-x");
            document.getElementById("collapsible-nav").setAttribute("class", "close")
        } else {
            /*
            Convert hamburger menu to X and show CollapsibleNav
            */
            e.currentTarget.classList.add("hamburger-btn-x");
            document.getElementById("collapsible-nav").setAttribute("class", "open")

        }
        this.setState({
            showCollapsibleNav: !(this.state.showCollapsibleNav),
        });
    }
    handleSearchClick = (e) => {
        /*TODO*/
    }
 
    render() {
        return (
            <section id="Header" >
                <TopNav imgSrc={this.props.imgSrc} searchClick={this.handleSearchClick} humburgerClick={this.handleHamburgerClick} />
                <CollapsibleNav />
                <img className="header-logo" src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder.png" />
            </section>
        );
    }
}

export default Header;
