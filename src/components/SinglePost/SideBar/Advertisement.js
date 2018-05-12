import React, { Component } from 'react';
class Advertisement extends Component {
    render() {
        return (
            <div className="sidebar-ad">
                <a href="http://example.com" target="_blank">
                    <img src={this.props.adImg} />
                </a>
            </div>
        );
    }
}

export default Advertisement;
