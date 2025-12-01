const express = require("express");
const router = express.Router();
const Enrollment = require("../models/Enrollment");
const Program = require("../models/Program");
const Joi = require("joi");

const enrollSchema = Joi.object({
    userId: Joi.string().required(),
    programId: Joi.string().required()
});

router.post("/", async (req, res, next) => {
    try {
        const { error } = enrollSchema.validate(req.body);
        if (error) {
            error.status = 400;
            return next(error);
        }
        const { userId, programId } = req.body;
        const program = await Program.findOne({ programId });
        if (!program) {
            return res.status(404).json({
                success: false,
                message: "Program not found",
                data: null
            });
        }

        const exists = await Enrollment.findOne({ userId, programId });
        if (exists) {
            return res.status(400).json({
                success: false,
                message: "Already enrolled",
                data: null
            });
        }

        const enrollment = await Enrollment.create({ userId, programId });

        return res.status(201).json({
            success: true,
            message: "Enrollment successful",
            data: enrollment
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
