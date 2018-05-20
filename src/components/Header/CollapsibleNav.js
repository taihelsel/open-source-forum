import React, { Component } from 'react';

class CollapsibleNav extends Component {
    render() {
        if(this.props.show){
            return (
                <nav className="collapsible-nav">
                    CollapsibleNav here
                </nav>
            );
        }else{
            return <div></div>
        }
    }
}

export default CollapsibleNav;
