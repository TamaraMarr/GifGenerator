import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

import "./RandomGif.css";

const muiTheme = getMuiTheme({
	flatButton: {
		textColor: "#2196F3",
		color: "#E3F2FD",
		buttonFilterColor: "#BBDEFB"
	}
});

export default class RandomGif extends Component {
	constructor(props) {
		super(props);

		this.state = {
			randomNum: 0,
			maxNum: 0,
			buttonOrURL: true,
			inputWidth: 0
		};

		this.bindInit();
	}

	bindInit() {
		this.getRandomNum = this.getRandomNum.bind(this);
		this.getAnotherGif = this.getAnotherGif.bind(this);
		this.copyGifLink = this.copyGifLink.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			maxNum: nextProps.currentGifData.length
		})

		this.getRandomNum(nextProps.currentGifData.length);
	}

	getRandomNum(currentGifDataArrLength) {
		if (currentGifDataArrLength === 1) {
			this.setState({
				randomNum: 0
			});
		} else {
			this.setState({
				randomNum: Math.floor(Math.random() * currentGifDataArrLength)
			});
		}
	}

	getAnotherGif () {
		this.setState({
			randomNum: Math.floor(Math.random() * this.state.maxNum),
			buttonOrURL: true
		})
	}

	copyGifLink() {
		const gifURL = document.getElementById("randomGif").src;

		this.setState({
			buttonOrURL: false,
			inputWidth: (gifURL.length + 1) * 8
		});

	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div className="RandomGif_imgDiv">
					{this.props.currentGifData.length !== 0 ? (
						<div className="grid_container">
							<img
								className="RandomGif_imageStyle"
								src={
									this.props.currentGifData[this.state.randomNum].images
										.original.url
								}
								alt="Gif"
								id="randomGif"
							/>
							<FlatButton className="RandomGif_tryAgainButton" label="Try again" onClick={this.getAnotherGif} />
							{this.state.buttonOrURL
								? <FlatButton className="RandomGif_copyGifURL" label="Copy gif link" onClick={this.copyGifLink} />
								: <div style={{ display: "flex" }}>
									<TextField
									value={document.getElementById("randomGif").src}
									style={{ width: this.state.inputWidth }}
									className="RandomGif_inputStyle" />
								</div>}
						</div>
					) : (
						""
					)}
				</div>
			</MuiThemeProvider>
		);
	}
}
