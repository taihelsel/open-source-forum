import React, { Component } from 'react';

/*React Componenets*/
import PostPreview from "./PostPreview.js";
class BlogPosts extends Component {
  render() {
    return (
        <section className="BlogPosts" >
            <ul>
                <PostPreview title={"Travel Post"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum reprehenderit quam sequi autem delectus assumenda illo ipsa praesentium velit mollitia dolorum perspiciatis rem, distinctio blanditiis..."} src={require("../.././media/images/stockphotos/calamity.jpg")} />
                <PostPreview title={"Food Post"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum reprehenderit quam sequi autem delectus assumenda illo ipsa praesentium velit mollitia dolorum perspiciatis rem, distinctio blanditiis..."} src={require("../.././media/images/stockphotos/calamity.jpg")} />
                <PostPreview title={"Lorem Ipsum"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum reprehenderit quam sequi autem delectus assumenda illo ipsa praesentium velit mollitia dolorum perspiciatis rem, distinctio blanditiis..."} src={require("../.././media/images/stockphotos/calamity.jpg")} />
                <PostPreview title={"Life style"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum reprehenderit quam sequi autem delectus assumenda illo ipsa praesentium velit mollitia dolorum perspiciatis rem, distinctio blanditiis..."} src={require("../.././media/images/stockphotos/calamity.jpg")} />
                <PostPreview title={"10 Things"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum reprehenderit quam sequi autem delectus assumenda illo ipsa praesentium velit mollitia dolorum perspiciatis rem, distinctio blanditiis..."} src={require("../.././media/images/stockphotos/calamity.jpg")} />
            
            </ul>
        </section>
    );
  }
}

export default BlogPosts;
