Day 21 — Middleware & Templates

### Details
This project demonstrates how to use Express.js middleware, template rendering, and modular routing to build a simple LMS-style application.

### Features
1.Logging Middleware
Logs every request with:
HTTP method
URL
Timestamp
2.EJS Template Rendering
Home page (/)
Status page (/status)
Dynamic Courses page (/courses)
3.Modular Routing
/courses route managed using a separate router file.
Easily scalable project structure.

### Folder Structure
Day_21/
middleware_templates/
│── server.js
│── package.json
│── middleware/
│     └── logger.js
│
│── routes/
│     └── courses.js
│     └── users.js
│
└── views/
      └── index.ejs
      └── status.ejs
      └── courses.ejs

### Running
>npm install
>node server.js

### postman
new -> post -> http://localhost:3000/users -> body -> raw -> json
try:
{
  "name": "Kiran",
  "role": "student"
}

### execution 
- http://localhost:3000
- http://localhost:3000/users
- http://localhost:3000/courses