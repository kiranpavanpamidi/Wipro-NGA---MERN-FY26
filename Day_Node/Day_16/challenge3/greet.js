import moment from "moment";

const name = process.argv[2];

if (!name) {
  console.log("❌ Please provide your name");
  console.log("Usage: node greet.js John");
  process.exit(1);
}

const dateTime = moment().format("ddd MMM D YYYY, h:mm A");

console.log(`Hello, ${name}! Today is ${dateTime}`);
