const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.write("Hello from Node.js Server");
    return res.end();
  } 
  else if (req.url === "/about") {
    res.write("About Page");
    return res.end();
  } 
  else {
    res.write("404 Not Found");
    return res.end();
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
