import React, { Component } from 'react';

class PostContent extends Component {
  render() {
    return (
      <div id="Article">
        <div className="author-info-head">
          <p>By Jane Doe</p>
          <a href="http://www.twitter.com/" target="_blank">@JaneDoe</a>
        </div>
        <p className="article-content first-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tellus rhoncus, aliquet dolor a, tristique mi. Praesent hendrerit ante quis mattis tincidunt. Donec quis ligula ullamcorper, eleifend felis et, molestie sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris tempor, erat vitae efficitur facilisis, tortor leo tempus tortor, vitae aliquam sem urna sit amet erat. Donec nec risus non erat scelerisque elementum. Mauris accumsan tellus dui, eu hendrerit nibh tempor vitae. Nam convallis est vitae semper viverra. Quisque molestie mauris in lectus commodo faucibus. Nunc vel scelerisque odio. Donec rutrum libero lacus, vitae consequat nisl laoreet vel. Nam lobortis, erat non viverra cursus, nunc magna elementum erat, non viverra ligula urna eget purus.
        </p>
        <p className="article-content">Phasellus viverra libero massa, a venenatis neque commodo sit amet. Mauris eget mattis tortor. Aliquam id est eu justo tincidunt interdum. Nam volutpat risus enim, eu pretium tellus tempus at. In feugiat, nibh vitae sollicitudin egestas, justo nisi sollicitudin nunc, viverra auctor elit ante nec dui. Mauris porttitor accumsan consequat. Pellentesque at semper turpis. Etiam at finibus nulla. Proin vitae urna viverra, rutrum leo in, aliquet neque. Sed vitae lorem vel arcu molestie consequat. Maecenas mauris tortor, accumsan eget pretium nec, luctus eget lacus.</p>
        <p className="article-content">Cras dictum, nisi et commodo fermentum, arcu lorem gravida erat, a pharetra tortor lectus eget libero. Fusce ac nibh at nisl blandit rutrum vel quis nulla. Morbi quis mattis ante, et commodo massa. Praesent rhoncus mauris ut nisi feugiat, vitae ultrices est elementum. Pellentesque ut pulvinar arcu. Cras finibus non enim nec posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
    );
  }
}

export default PostContent;
