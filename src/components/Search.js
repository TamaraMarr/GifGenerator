import React, { Component } from 'react';

import { fetchService } from "../services/fetchService";

import "./Search.css";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchedGif: "",
            isThereError: false,
            noSearchString: false,
            noResultsError: false
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

    resetErrors() {
        this.setState({
            isThereError: false,
            noSearchString: false,
            noResultsError: false
        })
    }

    handleClick() {
        this.resetErrors();

        const searchedGif = this.state.searchedGif;

        if(!searchedGif) {
            this.setState({
                noSearchString: true
            })
        } else {
            fetchService.getGif(searchedGif, (response) => {
                this.setState({
                    noSearchString: false,
                    searchedGif: ""
                })
                if(response.length === 0) {
                    this.setState({
                        noResultsError: true
                    })
                } else {
                    this.props.getGif(response);
                }
            }, (error) => {
                this.setState({
                    isThereError: true
                })
            });
        }
    }

    handleEnterBtn = (event) => {
        if (event.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <div className="row">
                <input className="col-8 col-sm-8 col-md-8 col-lg-10 col-xl-10 Search_inputLineStyle" placeholder="Search" value={this.state.searchedGif} onChange={this.getQuery} onKeyPress={this.handleEnterBtn} />
                <button className="col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 Search_buttonStyle" onClick={this.handleClick}>Find your gif</button>
                {this.state.isThereError ? <p className="Search_errorStyle">There's been an error, please reload the page</p> : ""}
                {this.state.noSearchString ? <p className="Search_errorStyle">Please enter a search term</p> : ""}
                {this.state.noResultsError ? <p className="Search_errorStyle">No results found</p> : ""}
            </div>
        );
    }
}