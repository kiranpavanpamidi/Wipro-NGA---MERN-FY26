const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("userLoggedIn", (name) => {
  console.log(`User ${name} logged in.`);
});

emitter.on("userLoggedOut", (name) => {
  console.log(`User ${name} logged out.`);
});

emitter.emit("userLoggedIn", "kiran pavan pamidi");
emitter.emit("userLoggedOut", "kiran");

setTimeout(() => {
  emitter.emit("sessionExpired", "kiran");
}, 5000);

emitter.on("sessionExpired", (name) => {
  console.log(`Session expired for ${name}`);
});
