Day 20 — Basic Routing & Route Middleware
 
### Details
This project implements the foundational backend routes for the SkillSphere LMS (Learning Management System). 
The backend allows users to view course details and ensures course IDs are validated before processing.

### Features
Displays a welcome message to verify the server is running.
Fetch course details using course ID in the URL.
Validates that course IDs are numeric before accessing the course data.
All API responses return consistent JSON for easier consumption.
Routes and middleware are organized in separate files for maintainability.

### Folder Structure
Day_20/
SkillSphere_LMS_API/
├── server.js
├── routes/
│ └── courses.js
└── middleware/
  └── validateCourseId.js

### Execution
>npm init -y
>npm install express
>node server.js

### Test the endpoints:
Challenge 1 -> Home route: -> http://localhost:4000/
Challenge 2 -> Valid course ID -> http://localhost:4000/courses/101
Challenge 3 -> Invalid course ID -> http://localhost:4000/courses/abc


