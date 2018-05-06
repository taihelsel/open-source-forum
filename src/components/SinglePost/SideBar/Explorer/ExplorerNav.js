import React, { Component } from 'react';
/*React Components*/
import ExporerContent from "./ExplorerContent.js";
class ExplorerNav extends Component {
    constructor(){
        super();
        this.state = {
            currentNav:"Latest",
        }
    }
    handleNavClick = (e) =>{
        if(!(e.currentTarget.classList.contains("selected"))){
            document.getElementById("explorer-nav").getElementsByClassName("selected")[0].classList.remove("selected");
            e.currentTarget.classList.add("selected");
            this.setState({
                currentNav:e.currentTarget.innerText,
            })
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
                <ExporerContent currentNav={this.state.currentNav} />
            </div>
        );
    }
}

export default ExplorerNav;
