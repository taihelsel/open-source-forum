import React, { Component } from 'react';
class SubNav extends Component {
    constructor() {
        super();
        this.state = {
            articleSecNav: ["New Entry", "View All"]
        }
    }
    changeNav = (e) => {
        if (e.currentTarget.id !== "selected-snav") {
            document.getElementById("selected-snav").removeAttribute("id");
            e.currentTarget.setAttribute("id", "selected-snav");
            this.props.updateSecNav(e.currentTarget.innerText.toLowerCase());
        }
    }
    setInitSelected = (ar) => {
        return ar.map((item, i) => {
            let id = ""
            if (item.toLowerCase() === this.props.currentSecNav) id = "selected-snav";
            return <li key={item + "-" + i} className="secondary-nav-item" id={id} onClick={this.changeNav}>{item}</li>
        })
    }
    handleNoShow = () => {
        if (document.getElementsByClassName("secondary-show")[0]) {
            return (<ul className="secondary secondary-close"></ul>)
        }
    }
    render() {
        return this.props.selectedNav === "articles" ? (
            <ul className="secondary secondary-show">
                {this.setInitSelected(this.state.articleSecNav)}
            </ul>
        ) : (
                <ul>{this.handleNoShow()}</ul>
            )
            ;
    }
}

export default SubNav;
