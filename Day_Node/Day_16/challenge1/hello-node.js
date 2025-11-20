console.log("Node Version:", process.version);
console.log("Current File:", __filename);
console.log("Current Directory:", __dirname);

console.log("Welcome message will print every 3 seconds...");

const interval = setInterval(() => {
  console.log("Hello from Node.js backend!");
}, 3000);

// Bonus: Stop after 10 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Interval stopped after 10 seconds.");
}, 10000);