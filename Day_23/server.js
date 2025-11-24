const express = require("express");
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

let courses = [
  { id: 1, name: "HTML Basics", duration: "3 weeks" },
  { id: 2, name: "JavaScript Advanced", duration: "4 weeks" }
];

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: "Too many requests" },
});

app.use("/api/v1/courses", limiter);

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message });
};

const validateCourse = [
  body("name")
    .notEmpty()
    .withMessage("Course name is required"),

  body("duration")
    .notEmpty()
    .withMessage("Course duration is required"),
];
// GET
app.get("/api/v1/courses", (req, res) => {
  res.json(courses);
});
// POST
app.post("/api/v1/courses", validateCourse, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    duration: req.body.duration,
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});
// PUT
app.put("/api/v1/courses/:id", validateCourse, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  const course = courses.find(c => c.id === Number(req.params.id));

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  course.name = req.body.name;
  course.duration = req.body.duration;

  res.json(course);
});
// DELETE
app.delete("/api/v1/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = courses.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Course not found" });
  }

  courses.splice(index, 1);
  res.json({ message: "Course deleted" });
});

app.use(errorHandler);
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
