const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Books Home");
});

router.get("/list", (req, res) => {
  res.send(["Book A", "Book B"]);
});

module.exports = router;
