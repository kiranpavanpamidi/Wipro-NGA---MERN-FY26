let courses = [
  { id: 1, name: "HTML Basics" },
  { id: 2, name: "Node Fundamentals" }
];

exports.getCourses = (req, res) => {
  res.status(200).json(courses);
};

exports.getCourse = (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  res.json(course);
};

exports.createCourse = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const newCourse = {
    id: courses.length + 1,
    name: req.body.name
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};

exports.updateCourse = (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).json({ message: "Course not found" });

  course.name = req.body.name || course.name;

  res.json(course);
};

exports.deleteCourse = (req, res) => {
  const exists = courses.find(c => c.id == req.params.id);
  if (!exists) return res.status(404).json({ message: "Course not found" });

  courses = courses.filter(c => c.id != req.params.id);
  res.json({ message: "Course deleted" });
};
