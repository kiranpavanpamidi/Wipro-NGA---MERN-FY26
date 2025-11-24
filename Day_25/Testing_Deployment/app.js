const express = require("express");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const courseRoutes = require("./routes/courses");
const app = express();
app.use(express.json());
app.use(logger);
app.use("/api/v1/courses", courseRoutes);
app.get("/status", (req, res) => {
  res.send("App is live");
});
app.use(errorHandler);
module.exports = app;
