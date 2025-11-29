const express = require("express");
const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).json({
        success: false,
        message: "userId and courseId are required"
      });
    }
    const courseExists = await Course.findOne({ courseId });
    if (!courseExists) {
      return res.status(400).json({
        success: false,
        message: "Invalid courseId"
      });
    }
    const alreadyEnrolled = await Enrollment.findOne({ userId, courseId });
    if (alreadyEnrolled) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled"
      });
    }
    const enrollment = await Enrollment.create({ userId, courseId });
    res.status(201).json({
      success: true,
      data: enrollment,
      message: "Enrollment successful"
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
