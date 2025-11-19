class Dispatcher {
  constructor() {
    this.listeners = [];
  }

  register(callback) {
    this.listeners.push(callback);
  }

  dispatch(action) {
    this.listeners.forEach((listener) => listener(action));
  }
}

const dispatcher = new Dispatcher();
export default dispatcher;
