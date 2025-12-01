const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const programRoutes = require("./routes/programRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/fittrack")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Error:", err));

app.use("/api/programs", programRoutes);
app.use("/api/enroll", enrollmentRoutes);

app.use(errorHandler);
app.listen(5000, () => console.log("Server running on port 5000"));
