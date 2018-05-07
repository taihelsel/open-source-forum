import React, { Component } from 'react';

class Popular extends Component {
    render() {
        return (
            <ul id="explorer-popular-container">
                <li className="explorer-popular-item">
                    <img src={require("../../../.././media/images/stockphotos/ancient-architecture.jpg")} />
                    <h1>Cathedral of Learning</h1>
                    <div className="mask"></div>
                </li>
                <li className="explorer-popular-item">
                    <img src={require("../../../.././media/images/stockphotos/camera.jpg")} />
                    <h1>Camera Ipsum</h1>
                    <div className="mask"></div>
                </li>
                <li className="explorer-popular-item">
                    <img src={require("../../../.././media/images/stockphotos/street.jpg")} />
                    <h1>Street View</h1>
                    <div className="mask"></div>
                </li>
            </ul>
        );
    }
}

export default Popular;
