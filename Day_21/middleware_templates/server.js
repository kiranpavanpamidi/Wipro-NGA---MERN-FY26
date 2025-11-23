const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const userRouter = require("./routes/users");
const courseRouter = require("./routes/courses");

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.get("/", (req, res) => {
  res.send("SkillSphere LMS API");
});
app.listen(3000, () => console.log("Server running on port 3000"));
