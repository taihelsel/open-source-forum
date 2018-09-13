import React from 'react';

/*Todo:
  abstract the ul from this and pass data to li as props

  just return the li 
  
*/
const Latest = (props) => {
  return (
    <ul id="explorer-latest-container">
      <li className="explorer-latest-item">
        <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
        <h1>Lorem Ipsum</h1>
        <ul className="explorer-latest-item-stats">
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/clock.png")} />
            <h3>5/2/2018</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/eye.png")} />
            <h3>2.5k</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/comment.png")} />
            <h3>58</h3>
          </li>
        </ul>
      </li>
      <li className="explorer-latest-item">
        <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
        <h1>Lorem Ipsum</h1>
        <ul className="explorer-latest-item-stats">
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/clock.png")} />
            <h3>5/2/2018</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/eye.png")} />
            <h3>2.5k</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/comment.png")} />
            <h3>58</h3>
          </li>
        </ul>
      </li>
      <li className="explorer-latest-item">
        <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
        <h1>Lorem Ipsum</h1>
        <ul className="explorer-latest-item-stats">
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/clock.png")} />
            <h3>5/2/2018</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/eye.png")} />
            <h3>2.5k</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/comment.png")} />
            <h3>58</h3>
          </li>
        </ul>
      </li>
      <li className="explorer-latest-item">
        <img src={require("../../../.././media/images/stockphotos/calamity.jpg")} />
        <h1>Lorem Ipsum</h1>
        <ul className="explorer-latest-item-stats">
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/clock.png")} />
            <h3>5/2/2018</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/eye.png")} />
            <h3>2.5k</h3>
          </li>
          <li className="latest-stat-item">
            <img src={require("../../../.././media/images/icons/comment.png")} />
            <h3>58</h3>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Latest;
