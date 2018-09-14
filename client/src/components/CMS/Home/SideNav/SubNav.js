import React, { Component } from 'react';
class SubNav extends Component {
    changeNav = (e) =>{
        if(e.currentTarget.id !== "selected-snav"){
            document.getElementById("selected-snav").removeAttribute("id");
            e.currentTarget.setAttribute("id","selected-snav");
            this.props.updateSecNav(e.currentTarget.innerText.toLowerCase());
        }
    }
    render() {
        return this.props.selectedNav === "articles" ? (
            <ul className="secondary">
                <li onClick={this.changeNav} id="selected-snav">New Entry</li>
                <li onClick={this.changeNav} >View All</li>
            </ul>
        ) : (
            <div></div>
        );
    }
}

export default SubNav;
