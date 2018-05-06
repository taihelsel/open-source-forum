import React, { Component } from 'react';

class ExplorerNav extends Component {
    handleNavClick = (e) =>{
        if(!(e.currentTarget.classList.contains("selected"))){
            document.getElementById("explorer-nav").getElementsByClassName("selected")[0].classList.remove("selected");
            e.currentTarget.classList.add("selected");
        }
    }
    render() {
        return (
            <div id="explorer-nav">
                <ul>
                    <li onClick={this.handleNavClick} className="selected">Latest</li>
                    <li onClick={this.handleNavClick}>Popular</li>
                    <li onClick={this.handleNavClick}>Tags</li>
                </ul>
            </div>
        );
    }
}

export default ExplorerNav;
