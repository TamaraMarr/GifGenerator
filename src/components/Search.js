import React, { Component } from 'react';
import { fetchService } from "../services/fetchService";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedGif: "",
            isThereError: false
        }

        this.bindInit();
    }

    bindInit() {
        this.getQuery = this.getQuery.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getQuery(event) {
        this.setState({
            searchedGif: event.target.value
        })
    }

    handleClick() {
        const searchedGif = this.state.searchedGif;

        fetchService.getGif(searchedGif, (response) => {
            this.props.getGif(response);
        }, (error) => {
            this.setState({
                isThereError: true
            })
        });

        this.setState({
            searchedGif: ""
        })
    }

    handleEnterBtn = (event) => {
        if (event.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="row">
                <input className="col-10" placeholder="Search" value={this.state.searchedGif} onChange={this.getQuery} onKeyPress={this.handleEnterBtn} />
                <button height="50px" onClick={this.handleClick} className="col-2 ">Find your gif</button>
                {this.state.isThereError ? <p>There's been an error, please reload the page</p> : ""}
            </div>
        );
    }
}

export default Search;