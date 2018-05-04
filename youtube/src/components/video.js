import React, {Component} from "react";

class Video extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const url = this.props.video.snippet.thumbnails.default.url;
        return (
            <li>
                <img src = {url}/>
                {this.props.mykey}
            </li>
        );
    };
}

export default Video;