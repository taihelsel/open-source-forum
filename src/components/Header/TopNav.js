import React, { Component } from 'react';

class TopNav extends Component {
    render() {
        return (
            <nav className="header-nav">
                <ul className="social-links-wrapper">
                    <li className="social-link-item">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src={require("../.././media/images/icons/facebook-icon.png")} alt="facebook icon" />
                        </a>
                    </li>
                    <li className="social-link-item">
                        <a href="https://www.twitter.com/" target="_blank">
                            <img src={require("../.././media/images/icons/twitter-icon.png")} alt="twitter icon" />
                        </a>
                    </li>
                    <li className="social-link-item">
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src={require("../.././media/images/icons/instagram-icon.png")} alt="instagram icon" />
                        </a>
                    </li>
                </ul>
                <ul className="nav-control-wrapper">
                    <li onClick={this.props.searchClick} className="search-btn">
                        <img src={require("../.././media/images/icons/search-icon.png")} alt="Search Icon" />
                    </li>
                    <li className="control-divider"></li>
                    <li onClick={this.props.humburgerClick} className="hamburger-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default TopNav;
