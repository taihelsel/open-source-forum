import React, { Component } from 'react';
import "./ArticlesStyle.css";
import NewEntry from './NewEntry';
import ViewAll from './ViewAll';
class Articles extends Component {
  renderPage = () => {
    switch(this.props.secondaryNav){
      case "new entry":
      return <NewEntry />
      case "view all":
      return <ViewAll/>
      default:
      return <NewEntry />
    }
  }
  render() {
    return (
      <div id="articles">
            {this.renderPage()}
      </div>
    );
  }
}

export default Articles;
