const express = require("express");
const router = express.Router();
const Program = require("../models/Program");
const Joi = require("joi");
const programSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    level: Joi.string().valid("Beginner", "Intermediate", "Advanced").required(),
    price: Joi.number().min(0).required()
});

router.post("/", async (req, res, next) => {
    try {
        const { error } = programSchema.validate(req.body);
        if (error) {
            error.status = 400;
            return next(error);
        }

        const program = await Program.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Program added successfully",
            data: program
        });

    } catch (err) {
        next(err);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const programs = await Program.find();

        return res.json({
            success: true,
            message: "Programs fetched successfully",
            data: programs
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
