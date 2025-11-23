const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, title: "Node.js Basics" },
  { id: 2, title: "Express.js Mastery" },
  { id: 3, title: "MongoDB for Beginners" },
];

router.get("/", (req, res) => {
  res.render("courses", { courses });
});

module.exports = router;
