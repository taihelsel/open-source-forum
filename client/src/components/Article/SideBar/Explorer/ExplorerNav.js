import React, { Component } from 'react';

class ExplorerNav extends Component {
    handleClick = (e) => {
        this.props.handleNavClick(e);
    }
    render() {
        return (
            <div id="explorer-nav">
                <ul>
                    <li onClick={this.handleClick} className="selected">Latest</li>
                    <li onClick={this.handleClick}>Popular</li>
                    <li onClick={this.handleClick}>Tags</li>
                </ul>
            </div>
        );
    }
}

export default ExplorerNav;
