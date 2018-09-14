import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Highlights extends Component {
  render() {
    return (
        <section className="highlights">
          <div className="highlight-reel">
            <div className="main-highlight-item">
              <div className="main-highlight-desc">
                <li><h1>Cathedral of Learning</h1></li>
                <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ducimus nesciunt nisi adipisci. Exercitationem magni fugit, voluptas doloribus ex harum hic sunt at impedit repudiandae laudantium necessitatibus porro molestiae nihil. Lorem ipsum...</p></li>
                <Link to={"/article/test"}>Keep Reading</Link>
              </div>
              <img src={require("../.././media/images/stockphotos/ancient-architecture.jpg")} alt="Street view"/>
            </div>
            <ul className="secondary-highlights">
              <li className="secondary-highlight-item">
                <div className="img-mask"></div>
                <h1>Street Ipsum</h1>
                <Link to={"/article/test"}><img src={require("../.././media/images/stockphotos/street.jpg")} alt="Picture of street"/></Link>
              </li>
              <li className="secondary-highlight-item">
                <div className="img-mask"></div>
                <h1>Camera Ipsum</h1>
                <Link to={"/article/test"}><img src={require("../.././media/images/stockphotos/camera.jpg")} alt="Picture of street"/></Link>
              </li>
            </ul>
          </div>
        </section>
    );
  }
}

export default Highlights;
