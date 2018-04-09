import React from "react";

import "./Header.css";

const Search = props => {

	const reloadPage = () => {
		document.location.reload()
	}

	return (
		<div className="grid-container">
			<div className="headerTitle">
				<img src="https://i.imgur.com/z7yjSEH.png" className="Search_headerStyle" alt="GifFinder" onClick={reloadPage} />
			</div>
			<div className="defaultGif">
				{props.searchEntered.length !== 0
					? ""
					: <img
						className="Search_defaultGifStyle"
						src="https://i.giphy.com/media/xUOwFXiC5Nfq6SKBKo/giphy.webp"
						alt="Default gif"
					/>
				}
			</div>
		</div>
	);
};

export default Search;
