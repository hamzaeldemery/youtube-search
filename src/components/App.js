import React from "react";
import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";
import { VideoDetails } from "./VideoDetails";
import youtube from "../apis/youtube";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { searchResult: [], chosenVideo: null };
    }
    componentDidMount = async () => {
        this.onSubmit("react js");
    };

    onSubmit = async (input) => {
        let result = await youtube.get("/search", {
            params: {
                q: input,
            },
        });
        this.setState({
            searchResult: result.data.items,
            chosenVideo: result.data.items[0],
        });
    };
    selectedVid = (video) => {
        this.setState({ chosenVideo: video });
    };
    render() {
        return (
            <div>
                <div className="ui container searchBar column">
                    <SearchBar onSubmit={this.onSubmit} />
                    <div className="ui inverted divider"></div>
                </div>
                <div className="ui grid">
                    <div className="ui row" style={this.styling.content}>
                        <div className="eleven wide column">
                            <div className="column">
                                <VideoDetails video={this.state.chosenVideo} />
                            </div>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                className="two column"
                                chooseVideo={this.selectedVid}
                                videos={this.state.searchResult}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    styling = {
        content: {
            paddingLeft: "40px",
        },
    };
}
