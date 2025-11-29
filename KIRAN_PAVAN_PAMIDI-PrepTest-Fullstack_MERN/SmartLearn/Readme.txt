Final Milestone Assessment (60 Marks | 120 Minutes)
Name: kiran pavan pamidi

### Project Overview
SmartLearn is a MERN-based online course portal where learners can:
Browse available courses
Enroll in courses
Track enrolled courses
This project implements a backend API with Node.js, Express, MongoDB and a frontend interface using React.

###Features
-Backend
Create and fetch courses via API
Enroll users in courses
Validation for required fields
Duplicate enrollment prevention
Error-handling middleware for invalid routes and server errors
API testing with Mocha + Chai + SuperTest

-Frontend
Display course catalog with title, category, and price
“Enroll Now” button with success/failure alerts
Tracks enrolled courses in state
Shows enrolled courses list separately
Handles loading and error states

### Folder Structure
SmartLearn/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Course.js
│   │   └── Enrollment.js
│   ├── routes/
│   │   ├── courseRoutes.js
│   │   └── enrollmentRoutes.js
│   ├── tests/
│   │   ├── Enrollment.test.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── CourseList.js
│   │   │   └── EnrollmentList.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── Screenshots/
└── README.md

### Setup and Execution
- Backend (setup)
-> cd SmartLearn/backend
-> npm install
-> node server.js
!--you output
Server running on port 5000
MongoDB Connected

- Frontend (setup)
 In new terminal
-> cd SmartLearn/frontend
-> npm install
-> npm start

### Testing 
-> frontend -> npm start -> click on -> Enroll now
-> if getting enrolled already -> go to CourseList.js ->const userId = "U105"; (U106 ->change it to a new one)

-> backend -> node server.js
-> open postman -> new Request -> post :http://localhost:5000/api/courses -> body -> raw -> json
//
{
  "courseId": "C104",
  "title": "MongoDB Mastery",
  "category": "Database",
  "price": 500
}

->open postman -> new Request -> post :http://localhost:5000/api/enroll -> body -> raw -> json
//
{
  "userId": "U101",
  "courseId": "C103"
}

### Output
 for output check the screenshots attached to the file 

