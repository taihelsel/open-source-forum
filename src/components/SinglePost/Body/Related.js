import React, { Component } from 'react';

class Related extends Component {
  render() {
    return (
        <div id="related-posts">
            <h1 className="body-divider">Related</h1>
            <ul className="related-posts-wrapper">
                <li className="related-post-item"><img src={require("../../.././media/images/stockphotos/street.jpg")}/></li>
                <li className="related-post-item"><img src={require("../../.././media/images/stockphotos/calamity.jpg")}/></li>
                <li className="related-post-item"><img src={require("../../.././media/images/stockphotos/camera.jpg")}/></li>
            </ul>
        </div>
    );
  }
}

export default Related;
