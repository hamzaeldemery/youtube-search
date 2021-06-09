import React from "react";
import { VideoItem } from "./VideoItem";

export class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chosenVideo: null };
    }

    listingVideos() {
        return this.props.videos.map((video) => {
            return (
                <VideoItem
                    choose={this.props.chooseVideo}
                    key={video.id.videoId}
                    video={video}
                />
            );
        });
    }
    render() {
        let videos = this.listingVideos();
        return <div className="ui middle aligned selection list">{videos}</div>;
    }
}
