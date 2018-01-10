import React, { Component } from "react";

import "./RandomGif.css";

export default class RandomGif extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomNum: 0
		};

		this.bindInit();
	}

	bindInit() {
		this.getRandomNum = this.getRandomNum.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.getRandomNum(nextProps.currentGifData.length);
	}

	getRandomNum(maxNum) {
		if (maxNum === 1) {
			this.setState({
				randomNum: 0
			});
		} else {
			this.setState({
				randomNum: Math.floor(Math.random() * maxNum)
			});
		}

		console.log(this.state.randomNum);
		console.log(this.props.currentGifData);
	}

	render() {
		return (
			<div>
				{this.props.currentGifData.length !== 0 ? (
					<img
						className="RandomGif_imageStyle"
						src={
							this.props.currentGifData[this.state.randomNum].images.original
								.url
						}
						alt="Gif"
					/>
				) : (
					""
				)}
			</div>
		);
	}
}
