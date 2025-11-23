const express = require("express");
const app = express();
const port = 4000;

const courseRoutes = require("./routes/courses");

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to SkillSphere LMS API");
});

// Courses Route
app.use("/courses", courseRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
