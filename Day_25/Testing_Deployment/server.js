const express = require("express");
const dotenv = require("dotenv");
const coursesRoutes = require("./routes/courses");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1/courses", coursesRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});
module.exports = app; 
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
