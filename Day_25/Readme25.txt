Day 25 — Testing & Deployment

### Details
A simple and modular RESTful API built using Node.js, Express, and MySQL/JSON for managing courses.
Supports CRUD operations, validation, middleware, and testing.

### Features
1.CRUD Operations
POST /api/v1/courses → Add new course
GET /api/v1/courses → Get all courses
GET /api/v1/courses/:id → Get one course
PUT /api/v1/courses/:id → Update course
DELETE /api/v1/courses/:id → Delete course

2.Middleware
Request logger
Error handler
Not-found handler
Validation middleware

3.Testing
Unit testing with Mocha + Chai
Integration testing with SuperTest
Coverage supported via NYC

4.Deployment Ready
Environment variables (dotenv)
Production PORT
Profile for Render/Heroku

### folder Structure
Day_25/
Testing_Deployment/
│── app.js
│── server.js
│── package.json
│── Procfile
│── routes/
│     └── courses.js
│── controllers/
│     └── coursesController.js
│── middleware/
│     └── logger.js
│     └── errorHandler.js
│── tests/
│     └── courses.test.js
│     └── users.integration.test.js
│── config/
      └── db.js

### Execution
>npm install
>node server.js

### test the API   (Useing Postman, Thunder Client)
- GET http://localhost:5000/api/v1/courses
- POST http://localhost:5000/api/v1/courses
Body: { "name": "JavaScript Mastery" }
- PUT http://localhost:5000/api/v1/courses/1
- DELETE http://localhost:5000/api/v1/courses/1

### Run tests
>npm test

### Run Coverage
>npm run coverage

### Deployment (Render/Heroku)
https://your-app.onrender.com/status





