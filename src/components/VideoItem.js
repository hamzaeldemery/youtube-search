import React from "react";

export const VideoItem = ({ video, choose }) => {
    return (
        <div className="item" onClick={() => choose(video)}>
            <div className="ui grid">
                <div className=" ui row">
                    <div className="seven wide column">
                        <img
                            alt={video.snippet.title}
                            src={video.snippet.thumbnails.default.url}
                            className="ui image"
                        />
                    </div>
                    <div className="content nine wide column">
                        <div className="header">{video.snippet.title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
