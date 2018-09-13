import React, { Component } from 'react';
/*React Components*/
import ExplorerNav from "./ExplorerNav.js";
import ExplorerContent from "./ExplorerContent.js";
class Explorer extends Component {
    constructor() {
        super();
        this.state = {
            currentNav: "Latest",
        }
    }
    handleNavClick = (e) => {
        if (!(e.currentTarget.classList.contains("selected"))) {
            document.getElementById("explorer-nav").getElementsByClassName("selected")[0].classList.remove("selected");
            e.currentTarget.classList.add("selected");
            this.setState({
                currentNav: e.currentTarget.innerText,
            })
        }
    }
    render() {
        return (
            <div>
                <ExplorerNav handleNavClick={this.handleNavClick} />
                <ExplorerContent tags={this.props.tags} currentNav={this.state.currentNav} />
            </div>
        );
    }
}

export default Explorer;
