import React, { Component } from 'react';

/*React Components*/
import Latest from "./Latest.js";
class ExplorerContent extends Component {
    render() {
        switch (this.props.currentNav.toLowerCase()) {
            case "latest":
                return <Latest />
                break;
            case "popular":
                return (
                    <div>
                        popular stuff
                    </div>
                );
                break;
            case "tags":
                return (
                    <div>
                        tags stuff
                </div>
                );
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
