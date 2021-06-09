import React from "react";

export const VideoDetails = ({ video }) => {
    if (video && video.snippet) {
        let { title, description } = video.snippet;
        return (
            <div key={video.id.videoId}>
                <div className="ui embed">
                    <iframe
                        width="30%"
                        height="40%"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="ui segment">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
            </div>
        );
    }
    return (
        <div class="ui active ">
            <div
                class="ui large centered inline text loader"
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    top: "50px",
                }}
            >
                Loading...
            </div>
        </div>
    );
};
