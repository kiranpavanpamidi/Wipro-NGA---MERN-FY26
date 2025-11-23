Day 22 — Forms, Database & Authentication

### Details
This project demonstrates how to implement form handling, MongoDB storage, and secure authentication with role-based access control (RBAC) using Express.js, Mongoose, and Passport.js.

###Features
Challenge 1 — Form Handling
Simple registration form using EJS.
Form submission via POST /register.
Shows confirmation message after successful submission.

Challenge 2 — MongoDB Integration
Uses Mongoose to connect to MongoDB.
User data saved into users collection.
Confirms data saved through console log.

Challenge 3 — Authentication & RBAC
Uses Passport.js (Local Strategy) for authentication.
Passwords hashed using bcrypt.
Sessions handled with express-session.
Role-based access control (RBAC):
Users with role admin can access /admin.
Others receive "Access Denied".

### File Structure
Day_22/
Data_forms/
 ├── server.js
 ├── .env
 ├── package.json
 └── views/
       └── register.ejs

### Installation & Setup
>npm install
>npm install express body-parser ejs mongoose dotenv 
>npm install passport passport-local bcrypt express-session
>node server.js

try:
- http://localhost:3000/register

