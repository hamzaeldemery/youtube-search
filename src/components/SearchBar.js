import React from "react";
import "../css/searchBar.css";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }
    onInputChange = (e) => {
        this.setState({ input: e.target.value });
    };

    formOnSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.input);
    }

    render() {
        return (
            <form onSubmit={(e) => this.formOnSubmit(e)} className="ui form">
                <div className="field">
                    <div className=" ui huge icon input ">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.input}
                            onChange={(e) => this.onInputChange(e)}
                        />
                        <i
                            className="inverted circular search link icon"
                            onClick={(e) => this.formOnSubmit(e)}
                        />
                    </div>
                </div>
            </form>
        );
    }
}
