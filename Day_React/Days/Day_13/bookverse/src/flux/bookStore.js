import dispatcher from "./dispatcher";

class BookStore {
  constructor() {
    this.books = [];
    this.listeners = [];

    dispatcher.register(this.handleActions.bind(this));
  }

  setInitialBooks(data) {
    this.books = data;
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_BOOK":
        this.books.push(action.payload);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  getBooks() {
    return this.books;
  }

  onChange(callback) {
    this.listeners.push(callback);
  }

  emitChange() {
    this.listeners.forEach((cb) => cb());
  }
}

const bookStore = new BookStore();
export default bookStore;
