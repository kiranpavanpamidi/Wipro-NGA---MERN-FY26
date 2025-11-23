const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

let products = [];

router.get("/", (req, res) => res.json(products));

router.post(
  "/",
  body("name").notEmpty(),
  body("price").isNumeric(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, price } = req.body;
    const product = { name, price };
    products.push(product);
    res.json(product);
  }
);

module.exports = router;
