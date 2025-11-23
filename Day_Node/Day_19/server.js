const express = require("express");
const app = express();
const bookRouter = require("./routes/books");
const logger = require("./middleware/logger");

// Middleware
app.use(express.json());
app.use(logger);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

// Status route
app.get("/status", (req, res) => {
  res.json({ server: "running", uptime: "OK" });
});

// Products route (query parameters)
app.get("/products", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.send("Please provide a product name");
  }

  res.json({ query: name });
});

// Books route
app.use("/books", bookRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Internal Error: ", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
