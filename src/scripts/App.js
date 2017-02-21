
import Gallery from './components/Gallery.js';
import NotFound from './components/NotFound.js';
import Giphy from './utils/Giphy.js';


export default class App {

  constructor () {
    this.giphy = new Giphy();

    this.gallery = new Gallery(document.querySelector('.gallery'));
    this.notFound = new NotFound(document.querySelector('.not-found'));

    this.form = document.forms.search;
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit (event) {
    event.preventDefault();

    // When the user searches again, we want to remove the old gifs...
    this.gallery.removeItems();

    // ...and we want to hide the not-found element.
    this.notFound.hide();

    // Fetch the query from the input field.
    const query = this.form.querySelector('input').value;

    // Search for new GIFs on Giphy.
    this.giphy.search(query)
      .then(response => {
        // If we can't find any items based on the search query we need to tell
        // the user that.
        if (response.data.length === 0) {
          this.notFound.show(query);
        }

        // Create new gallery items for all GIFs.
        response.data.forEach(item => this.gallery.addItem(item));
      });
  }
}
