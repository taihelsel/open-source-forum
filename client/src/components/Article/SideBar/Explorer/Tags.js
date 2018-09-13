import React, { Component } from 'react';
/*Todo:
  abstract the ul from this and pass data to li as props

  just return the li 
  
*/
const Tags = (props) => {
    return (
        <ul id="explorer-tags-container">
            <li className="explorer-tags-item">Lorem</li>
            <li className="explorer-tags-item">News</li>
            <li className="explorer-tags-item">Ipsum</li>
            <li className="explorer-tags-item">Camera</li>
            <li className="explorer-tags-item">Stuff</li>
            <li className="explorer-tags-item">Raft</li>
            <li className="explorer-tags-item">Car</li>
            <li className="explorer-tags-item">Pink</li>
        </ul>
    );
}

export default Tags;
