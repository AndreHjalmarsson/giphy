
import GalleryImage from './GalleryImage.js';
import GalleryItem from './GalleryItem.js';

export default class Gallery {

  constructor (element) {
    this.element = element;
  }

  addItem (item) {
    const galleryItem = new GalleryItem(item.url);
    const galleryImage = new GalleryImage(item.images.original.url);

    galleryItem.element.appendChild(galleryImage.element);

    this.element.appendChild(galleryItem.element);
  }

  removeItems () {
    this.element.querySelectorAll('.gallery__item').forEach(item => item.remove());
  }
}
