import React, { Component } from 'react';
import './ArticleStyle.css';
/*React Components*/
import Header from "../Header/Header.js";
import PostSidebar from "./SideBar/PostSidebar.js";
import Comments from "./Comments/Comments.js";
class Article extends Component {
  constructor() {
    super();
    this.state = {
      has_data: false,
      post_date: "",
      title: "",
      content: "",
      tags: "",
      coverImg: "",
      views: "",
      likes: "",
      lastEdit: "",
      error: false,
    }
  }
  componentWillMount = () => {
    if (this.state.has_data === false) {
      let p_id = this.props.location.pathname;
      p_id = p_id.split("/article/");
      fetch("/api/article/" + p_id[1],{
        method:"POST"
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            this.setState({
              error: true,
            });
          }
        })
        .then((res) => {
          const p_d = this.formatDate(parseInt(res.post_date));
          this.setState({
            has_data: true,
            post_date: p_d,
            title: res.title,
            content: res.content,
            tags: res.tags,
            views: res.views,
            likes: res.likes,
            lastEdit: res.lastEdit
          });
        });
    }
  }
  formatDate = (x) => {
    let _d = new Date(x);
    return ((_d.getMonth() + 1) + "/" + _d.getDate() + "/" + _d.getFullYear());
  }
  render() {
    console.log("this sttate", this.state);
    return this.state.has_data ? (
      <section id="article">
        <Header imgSrc={"camera"} />
        <hr className="head-divider" />
        <div className="single-post-head">
          <img src={require("../.././media/images/stockphotos/camera.jpg")} alt="Image of a camera" />
          <div className="img-mask" />
          <h1 className="single-post-head-label">{this.state.title}</h1>
          <ul className="post-info">
            <li>
              <img src={require("../.././media/images/icons/clock.png")} />
              <h3>{this.state.post_date}</h3>
            </li>
            <li>
              <img src={require("../.././media/images/icons/eye.png")} />
              <h3>{this.state.views}</h3>
            </li>
            <li>
              <img src={require("../.././media/images/icons/comment.png")} />
              <h3>23</h3>
            </li>
          </ul>
        </div>
        <PostSidebar tags={this.state.tags} />
        <div id="article-body">
          <div className="author-info-head">
            <p>By Jane Doe</p>
            <a href="http://www.twitter.com/" target="_blank">@JaneDoe</a>
          </div>
          {this.state.content.map((content, i) => {
            let class_name = (i === 0 ? "article-content first-paragraph" : "article-content");
            return <p className={class_name}>{content}</p>
          })}
        </div>

        <div id="about-author">
          <h1 className="body-divider">About Jane</h1>
          <img className="author-headshot" src={require("../.././media/images/stockphotos/headshot.jpg")} />
          <h1 className="author-name">Jane Doe</h1>
          <ul className="author-social">
            <li><img src={require("../.././media/images/icons/facebook-icon.png")} /></li>
            <li><img src={require("../.././media/images/icons/twitter-icon.png")} /></li>
            <li><img src={require("../.././media/images/icons/instagram-icon.png")} /></li>
          </ul>
          <p className="author-about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac turpis sed nunc blandit facilisis. Duis sapien est, egestas vitae convallis et, tempor vehicula lectus. Phasellus massa dui, ultrices vel nunc nec, laoreet tincidunt ligula.</p>
        </div>
        <div id="related-posts">
          <h1 className="body-divider">Related</h1>
          <ul className="related-posts-wrapper">
            <li className="related-post-item"><img src={require("../.././media/images/stockphotos/street.jpg")} /></li>
            <li className="related-post-item"><img src={require("../.././media/images/stockphotos/calamity.jpg")} /></li>
            <li className="related-post-item"><img src={require("../.././media/images/stockphotos/camera.jpg")} /></li>
          </ul>
        </div>
        <Comments comments={[{ img: require("../.././media/images/icons/basic-user.png"), author: "billy bob", text: "Test comment here", datePosted: "May 1, 2018 at 6:40pm" }]} />
      </section>
    ) :
      this.state.error === true ? (
        <div>error here</div>
      ) : (
          <div> loader here </div>
        )
  }
}

export default Article;
