import React, { Component } from 'react';

class ExplorerNav extends Component {
  render() {
    return (
        <div id="explorer-nav">
            <ul>
                <li className="selected">Latest</li>
                <li>Popular</li>
                <li>Tags</li>
            </ul>
        </div>
    );
  }
}

export default ExplorerNav;
