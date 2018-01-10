import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./Header.css";

const Search = props => {
	console.log(props.searchEntered);
	return (
		<MuiThemeProvider>
			<div className="grid-container">
				<div className="headerTitle">
					<img src="https://i.imgur.com/z7yjSEH.png" className="Search_headerStyle" onClick={this.reloadPage} alt="GifGenerator" />
				</div>
				<div className="defaultGif">
					{props.searchEntered.length !== 0
						? ""
						: <img
							className="Search_defaultGifStyle"
							src="https://media.giphy.com/media/xP5kh2WPIhqhy/giphy.gif"
							alt="Default gif"
						/>
					}
				</div>
			</div>
		</MuiThemeProvider>
	);
};

export default Search;
