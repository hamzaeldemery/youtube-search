import React from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../apis/youtube";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { searchResult: "" };
    }

    onSubmit = async (input) => {
        let result = await youtube.get("/search", {
            params: {
                q: input,
            },
        });
        console.log(result.data.items);
    };

    render() {
        return (
            <div className="ui container searchBar">
                <SearchBar onSubmit={this.onSubmit} />
                <div className="ui inverted divider"></div>
            </div>
        );
    }
}
