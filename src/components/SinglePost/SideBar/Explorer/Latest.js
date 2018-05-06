import React, { Component } from 'react';

class Latest extends Component {
  render() {
    return (
      <ul id="explorer-latest-container">
        <li className="explorer-latest-item">
          <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
          <h1>Lorem Ipsum</h1>
          <div className="explorer-latest-item-stats">
            TODO date posted, views, comments.
              </div>
        </li>
        <li className="explorer-latest-item">
          <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
          <h1>Lorem Ipsum</h1>
          <div className="explorer-latest-item-stats">
            TODO date posted, views, comments.
              </div>
        </li>
        <li className="explorer-latest-item">
          <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
          <h1>Lorem Ipsum</h1>
          <div className="explorer-latest-item-stats">
            TODO date posted, views, comments.
              </div>
        </li>
        <li className="explorer-latest-item">
          <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
          <h1>Lorem Ipsum</h1>
          <div className="explorer-latest-item-stats">
            TODO date posted, views, comments.
              </div>
        </li>
      </ul>
    );
  }
}

export default Latest;
