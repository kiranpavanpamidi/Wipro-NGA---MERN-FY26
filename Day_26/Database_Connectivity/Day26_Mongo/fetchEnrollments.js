require("./connect");
const Enrollment = require("./models/Enrollment");

Enrollment.find().populate("userId")
    .then(data => {
        console.log("📘 Enrollment Details:\n", data);
        process.exit();
    })
    .catch(err => console.log(err));
