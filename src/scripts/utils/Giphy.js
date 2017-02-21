
import { GIPHY_API_KEY } from '../config';
import queryString from 'query-string';

export default class Giphy {

  search (query) {
    const url = this.buildApiUrl(query);

    return window.fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  buildApiUrl (query) {
    // Build the search query string with the stringify method from the
    // query-string package.
    const search = queryString.stringify({
      q: query,
      api_key: GIPHY_API_KEY,
      rating: 'g'
    });

    return `https://api.giphy.com/v1/gifs/search?${search}`;
  }
}
