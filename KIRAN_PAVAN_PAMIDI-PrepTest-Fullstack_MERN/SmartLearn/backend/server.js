const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/enroll", require("./routes/enrollmentRoutes"));
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
app.use(require("./middleware/errorHandler"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
