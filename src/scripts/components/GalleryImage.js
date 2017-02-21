export default class GalleryImage {

  constructor (source) {
    this.element = document.createElement('img');

    this.element.src = source;
  }
}
