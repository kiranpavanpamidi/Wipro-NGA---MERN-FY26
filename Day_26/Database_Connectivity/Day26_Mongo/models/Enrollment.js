const mongoose = require("mongoose");
const EnrollmentSchema = new mongoose.Schema({
    courseName: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    enrolledOn: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Enrollment", EnrollmentSchema);
