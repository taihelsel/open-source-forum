import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

/*React Components*/
import Home from "./components/Home/Home.js";
import Article from "./components/Article/Article.js";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/test" component={Article} />
        </div>
      </Router>
    );
  }
}

export default App;
