Day 18 — Asynchronous Programming in Node.js

### Details
Challenge 7 — Callbacks
Read a file using the fs module and display a confirmation message after reading. Should show asynchronous behavior.

Challenge 8 — Promises
Use fs.promises to read content from input.txt, write that content to output.txt, and log a success message.

Challenge 9 — Async/Await
Rewrite challenge 8 using async/await with error handling and artificial delay.

### Features
Demonstrates asynchronous nature of Node.js
Uses callbacks, Promises, and async/await
Includes artificial delay using setTimeout / Promise timeout
Shows proper error handling (try/catch or .catch)
Covers real-world file operations
No callback hell
Clean, production-style async code

### File Structure
Day_18/
│
├── challenge7/
│   ├── callback.js 
│   └── data.txt     // This is callback challenge file.
│
├── challenge8/
│   ├── promise.js  
│   └── input.txt   // This will be copied using Promises.
│
└── challenge9/
│   ├── asyncAwait.js 
│   └── input.txt   // This will be copied using Async/Await.

### Execution
- challenge 7
> cd challenge7
> node callback.js

-challenge 8
> cd challenge8
> node promise.js

- challenge 9
> cd challenge9
> node asyncAwait.js


