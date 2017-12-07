import axios from 'axios';
import { GIPHY_API_KEY } from '../constants'; 

class FetchService {
    getGif(searchString, responseHandler, errorHandler) {
		axios.get('https://api.giphy.com/v1/gifs/search', {
			params: {
				api_key: GIPHY_API_KEY,
				q: searchString,
				limit: 499
			}
		})
		.then((response) => {
			responseHandler(response.data.data);
		})
		.catch((error) => {
			errorHandler(error);
		})
	}
}

export const fetchService = new FetchService();