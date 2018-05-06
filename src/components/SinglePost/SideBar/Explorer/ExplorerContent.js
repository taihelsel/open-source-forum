import React, { Component } from 'react';

class ExplorerContent extends Component {
    render() {
        switch (this.props.currentNav.toLowerCase()) {
            case "latest":
                return (
                    <div>
                        latest stuff
                    </div>
                );
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
