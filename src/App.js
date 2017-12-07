import React, { Component } from 'react';

import './App.css';
import Search from "./components/Search";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchGif: "",
			shouldDisplayGif: false,
			currentGifData: "",
			randomNum: 0
		}

		this.bindInit();
	}

	bindInit() {
		this.displayGif = this.displayGif.bind(this);
	}

	displayGif(gifData) {
		this.setState({
			currentGifData: gifData,
			shouldDisplayGif: true,
			randomNum: Math.floor(Math.random() * 499)
		})
	}

	render() {
		console.log(this.state.currentGif);
		return (
			<div className="container">
				<Search getGif={this.displayGif} />
				{this.state.shouldDisplayGif ? <img className="col-12" src={this.state.currentGifData[this.state.randomNum].images.original.url} alt="Gif"/> : <img src="https://i.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.webp" className="col-6 offset-3" alt="Default gif" />}
			</div>
		);
	}
}

export default App;
