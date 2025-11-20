Day 17 — Node.js Core Modules

### Details
This day covers essential Node.js built-in modules like fs, http, and events. These modules help you perform file operations, create servers, and implement event-driven logic without external packages.

### Features
Challenge 4: File System (fs)
Write user input to a file (feedback.txt)
Read the file and display the stored content
Bonus: Uses fs.promises with async/await

Challenge 5: HTTP Module
Simple Node.js HTTP server
Handles two routes:
/ ->“Hello from Node.js Server”
/about ->“About Page”
Bonus: Serve static HTML

Challenge 6: Events Module
Custom events created using EventEmitter
Events:
userLoggedIn
userLoggedOut
Bonus: sessionExpired event emitted after 5 seconds

### File Structure
Day17/
│
├── challenge4-fs/
│   ├── app.js
│   └── feedback.txt  (auto-created)
│
├── challenge5-http/
│   ├── server.js
│   └── index.html  (optional for bonus)
│
└── challenge6-events/
    └── events.js

### Execution
- challenge 4
> cd challenge4-fs
> node app.js

-challenge 5
> cd challenge5-http
> node server.js
     Visit:
	http://localhost:4000           // Hello from Node.js Server
	http://localhost:4000/about     // About Page
	http://localhost:4000/test      // 404 Not Found

- challenge 6
> cd challenge6-events
> node events.js


