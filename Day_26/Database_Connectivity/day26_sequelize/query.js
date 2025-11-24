const sequelize = require("./models");
const Course = require("./models/Course");
const Instructor = require("./models/Instructor");
async function run() {
    await sequelize.sync();
    const instructor = await Instructor.findOne({ where: { id: 1 } });
    const courses = await instructor.getCourses();
    console.log("Courses by Instructor:", courses);
}

run();
