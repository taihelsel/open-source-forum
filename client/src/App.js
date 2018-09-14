import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/*React Components*/
import Home from "./components/Home/Home.js";
import Article from "./components/Article/Article.js";
import BloggerCMS from "./components/CMS/BloggerCMS/BloggerCMS.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/article/" component={Article} />
          <Route path="/pannel/blogger/" component={BloggerCMS} />
        </div>
      </Router>
    );
  }
}

export default App;
