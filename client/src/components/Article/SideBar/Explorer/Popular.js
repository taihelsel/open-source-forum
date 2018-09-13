import React, { Component } from 'react';
/*Todo:
  abstract the ul from this and pass data to li as props

  just return the li 
  
*/
const Popular = (props) => {
    return (
        <ul id="explorer-popular-container">
            <li className="explorer-popular-item">
                <img src={require("../../../.././media/images/stockphotos/ancient-architecture.jpg")} />
                <h1>Cathedral of Learning</h1>
                <div className="img-mask"></div>
            </li>
            <li className="explorer-popular-item">
                <img src={require("../../../.././media/images/stockphotos/camera.jpg")} />
                <h1>Camera Ipsum</h1>
                <div className="img-mask"></div>
            </li>
            <li className="explorer-popular-item">
                <img src={require("../../../.././media/images/stockphotos/street.jpg")} />
                <h1>Street View</h1>
                <div className="img-mask"></div>
            </li>
        </ul>
    );
}

export default Popular;
