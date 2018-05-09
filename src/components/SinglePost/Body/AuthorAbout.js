import React, { Component } from 'react';

class AuthorAbout extends Component {
  render() {
    return (
        <div id="about-author">
          <img className="author-headshot" src={require("../../.././media/images/stockphotos/headshot.jpg")}/>
          <h1 className="author-name">Jane Doe</h1>
          <ul className="author-social">
            <li><img src={require("../../.././media/images/icons/facebook-icon.png")} /></li>
            <li><img src={require("../../.././media/images/icons/twitter-icon.png")} /></li>
            <li><img src={require("../../.././media/images/icons/instagram-icon.png")} /></li>
          </ul>
          <p className="author-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis sed nunc blandit facilisis. Duis sapien est, egestas vitae convallis et, tempor vehicula lectus. Phasellus massa dui, ultrices vel nunc nec, laoreet tincidunt ligula.</p>
        </div>
    );
  }
}

export default AuthorAbout;
