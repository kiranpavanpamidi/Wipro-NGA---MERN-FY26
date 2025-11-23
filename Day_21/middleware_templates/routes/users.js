const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users GET route working");
});

router.post("/", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
});

module.exports = router;
