import React, { Component } from 'react';

class Popular extends Component {
    render() {
        return (
            <ul id="explorer-popular-container">
                <li className="explorer-popular-item">
                    <img src={require("../../../.././media/images/stockphotos/ancient-architecture.jpg")} />
                </li>
            </ul>
        );
    }
}

export default Popular;
