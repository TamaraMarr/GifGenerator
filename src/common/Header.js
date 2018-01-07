import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./Header.css";

const Search = (props) => {
		return (
			<MuiThemeProvider>
				<div className="grid-container">
					<h1
						className="Search_headerStyle"
						onClick={this.reloadPage}
					>
						GifGenerator
					</h1>
					{props.searchEntered ? (
						""
					) : (
						<img
							className="Search_defaultGifStyle"
							src="https://media.giphy.com/media/xP5kh2WPIhqhy/giphy.gif"
							alt="Default gif"
						/>
					)}
				</div>
			</MuiThemeProvider>
		);
}

export default Search;
