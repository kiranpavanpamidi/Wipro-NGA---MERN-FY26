const db = require("./db");

const course = {
    title: "Full Stack Development",
    description: "Learn MERN stack",
    price: 499
};

const sql = "INSERT INTO courses (title, description, price) VALUES (?, ?, ?)";

db.query(sql, [course.title, course.description, course.price], (err, result) => {
    if (err) throw err;
    console.log("Course Inserted!", result);
    process.exit();
});
