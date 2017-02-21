
export default class NotFound {

  constructor (element) {
    this.element = element;
  }

  hide () {
    this.element.classList.add('not-found--active');
  }

  show (query) {
    this.element.textContent = `We couldn't find any GIFs with the search query "${query}".`;
    this.element.classList.add('not-found--active');
  }
}
