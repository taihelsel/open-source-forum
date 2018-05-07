import React, { Component } from 'react';

/*React Components*/
import Latest from "./Latest.js";
import Popular from "./Popular.js";
import Tags from "./Tags.js";
class ExplorerContent extends Component {
    render() {
        switch (this.props.currentNav.toLowerCase()) {
            case "latest":
                return <Latest />
                break;
            case "popular":
                return <Popular />
                break;
            case "tags":
                    return <Tags />
                break;
            default:
                return (
                    <div>
                        error
                    </div>
                );
                break;
        }
    }
}

export default ExplorerContent;
