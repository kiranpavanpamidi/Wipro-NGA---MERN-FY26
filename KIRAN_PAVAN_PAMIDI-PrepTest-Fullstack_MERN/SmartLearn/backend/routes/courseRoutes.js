const express = require("express");
const Course = require("../models/Course");
const router = express.Router();
const Joi = require("joi");

const courseSchema = Joi.object({
  courseId: Joi.string().required(),
  title: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().min(0).required()
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = courseSchema.validate(req.body);
    if (error) return next(error);

    const newCourse = await Course.create(req.body);

    res.status(201).json({
      success: true,
      data: newCourse,
      message: "Course created successfully"
    });
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const courses = await Course.find();

    res.json({
      success: true,
      data: courses,
      message: "Course list fetched"
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
