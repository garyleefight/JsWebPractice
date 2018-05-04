import React, {Component} from "react";
import Video from "./video";

class VideoList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const videos = this.props.videos.map(video => {
            return (
                <Video 
                mykey = {video.etag}
                video = {video}
                />
            );
        });

        return (<div>
            {videos}
        </div>);
    }
}

export default VideoList;