import React, { Component } from "react";

import Search from "./components/Search";
import Header from "./common/Header";
import RandomGif from "./components/RandomGif";

import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gifInfo: []
		};

		this.bindInit();
	}

	bindInit() {
		this.getGifUrl = this.getGifUrl.bind(this);
	}

	getGifUrl(gifData) {
		this.setState({
			gifInfo: gifData
		});
	}

	render() {
		return (
			<div className="container-grid">
				<div></div>
				<div></div>

				<div className="header">
					<Header searchEntered={this.state.gifInfo}/>
				</div>

				<div className="search">
					<Search getGif={this.getGifUrl} />
				</div>

				<div className="randomGif">
					<RandomGif currentGifData={this.state.gifInfo} />
				</div>

				<div></div>
				<div></div>
			</div>
		);
	}
}
