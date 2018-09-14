import React, { Component } from 'react';
class SubNav extends Component {
    render() {
        return this.props.selectedNav === "articles" ? (
            <ul className="secondary">
                <li>articles stuff here</li>
            </ul>
        ) : (
            <div></div>
        );
    }
}

export default SubNav;
