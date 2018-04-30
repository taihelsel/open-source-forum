import React, { Component } from 'react';

class Highlights extends Component {
  render() {
    return (
        <section className="highlights">
          <ul className="highlight-reel">
            <li className="highlight-item">
              <ul className="highlight-desc">
                <li><h1>Cathedral of Learning</h1></li>
                <li><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ducimus nesciunt nisi adipisci. Exercitationem magni fugit, voluptas doloribus ex harum hic sunt at impedit repudiandae laudantium necessitatibus porro molestiae nihil. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolorem itaque, possimus quaerat aspernatur tempora atque accusantium, temporibus aut omnis harum pariatur ipsa odit earum, quod dolores culpa dolor laborum?</p></li>
                <li><button>Keep Reading</button></li>
              </ul>
              <img src={require("../.././media/images/stockphotos/ancient-architecture.jpg")} alt="Street view"/>
            </li>
          </ul>
        </section>
    );
  }
}

export default Highlights;
