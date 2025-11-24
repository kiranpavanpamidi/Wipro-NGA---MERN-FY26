Day 23 — RESTful APIs & API Middleware

### Details
This project demonstrates how to build a RESTful API for a Course Management System using Node.js and Express.js.
It includes CRUD operations, input validation, centralized error handling, and API rate limiting.

### features
1. Complete CRUD API
Create, Read, Update, Delete courses
In-memory course storage
Versioned API (/api/v1/courses)

2. Input Validation (express-validator)
Ensures course name and duration are required
Returns meaningful validation messages

3. API Rate Limiting (express-rate-limit)
Limits requests to 5 requests per minute
Prevents API abuse

4. Centralized Error Handling
One place to catch server errors
Clean and scalable structure

### Folder structure
Day_23/
│
├── server.js          
├── package.json      
├── package-lock.json  
└── README.md         

### How to Run the Project (Execution Steps)
>npm install
>npm install express express-validator express-rate-limit
>node server.js

### Try: In(postman / thunder client(VS Code))
- Postman -> New Request -> GET http://localhost:5000/api/v1/courses -> body -> raw -> json

- Postman -> New Request -> POST http://localhost:5000/api/v1/courses -> body -> raw -> json
{
  "name": "React Beginner",
  "duration": "5 weeks"
}

- Postman -> New Request -> PUT http://localhost:5000/api/v1/courses/1 -> body -> raw -> json
{
  "name": "CPP",
  "duration": "8 weeks"
}

- Postman -> New Request -> DELETE http://localhost:5000/api/v1/courses/1 -> body -> raw -> json


