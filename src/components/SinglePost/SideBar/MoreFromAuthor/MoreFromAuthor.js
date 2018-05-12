import React, { Component } from 'react';

/*React Components*/
import Post from "./Post.js";
class MoreFromAuthor extends Component {
    render() {
        return (
            <div id="MoreFromAuthor">
                <h1 className="moreauthor-head">More From {this.props.authorname}</h1>
                <ul className="moreauthor-posts-wrapper">
                    {this.props.authorposts.map((post)=>{
                        return <Post primarytag={post.primarytag} title={post.title} img={post.img} />
                    })}
                </ul>
            </div>
        );
    }
}

export default MoreFromAuthor;
