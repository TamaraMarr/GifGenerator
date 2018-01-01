import React, { Component } from 'react';

import Search from "./components/Search";
import RandomGif from "./components/RandomGif";

import './App.css';

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
			<div className="container col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
				<Search getGif={this.getGifUrl}/>
				<RandomGif currentGifData={this.state.gifInfo}/>
			</div>
		)
	}
}