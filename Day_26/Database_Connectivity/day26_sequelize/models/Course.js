const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Instructor = require("./Instructor");

const Course = sequelize.define("Course", {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT
});
Instructor.hasMany(Course);
Course.belongsTo(Instructor);

module.exports = Course;
