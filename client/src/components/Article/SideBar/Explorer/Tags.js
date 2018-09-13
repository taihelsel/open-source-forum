import React, { Component } from 'react';
/*Todo:
  abstract the ul from this and pass data to li as props

  just return the li 
  
*/
const Tags = (props) => {
    return (
        <ul id="explorer-tags-container">
            {props.tags.map((tag) => {
                return <li className="explorer-tags-item">{tag}</li>
            })}
        </ul>
    );
}

export default Tags;
