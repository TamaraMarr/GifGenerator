import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./Header.css";

const Search = props => {

	const reloadPage = () => {
		document.location.reload()
	}

	return (
		<MuiThemeProvider>
			<div className="grid-container">
				<div className="headerTitle">
					<img src="https://i.imgur.com/z7yjSEH.png" className="Search_headerStyle" alt="GifGenerator" onClick={reloadPage} />
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
