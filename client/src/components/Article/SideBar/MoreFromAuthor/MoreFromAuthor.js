import React from 'react';

/*React Components*/
import PostPreview from "./PostPreview.js";
const MoreFromAuthor = (props) => {
    return (
        <div id="MoreFromAuthor">
            <h1 className="moreauthor-head">More From {props.authorname}</h1>
            <ul className="moreauthor-posts-wrapper">
                {props.authorposts.map((post) => {
                    return <PostPreview primarytag={post.primarytag} title={post.title} img={post.img} />
                })}
            </ul>
        </div>
    );
}

export default MoreFromAuthor;
