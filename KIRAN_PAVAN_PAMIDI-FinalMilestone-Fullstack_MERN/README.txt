Final Milestone Assessment
# FitTrack – Personal Fitness Training Portal

## Project Details
FitTrack is a MERN-based portal where users can explore fitness programs, enroll in one, and manage their enrolled programs. This project demonstrates:
- Backend API with Node.js, Express, MongoDB, Mongoose
- Frontend UI with React
- Validation with Joi
- Middleware for error handling
- Basic enrollment logic with duplicate checks
- Frontend API integration, loading, error handling, and feedback

## Features

### Backend
- Program Catalog API
  - Add new fitness programs (POST /api/programs)
  - List all programs (GET /api/programs)
- Enrollment API
  - Enroll a user into a program (POST /api/enroll)
  - Prevent duplicate enrollments
  - Proper validation and error handling

### Frontend
- Display list of available programs with:
  - Name, category, level, price
  - Enroll button
- Loading and error states
- Enroll programs with immediate feedback
- Maintain enrolled programs state


## File Structure

### Backend
backend/
models/
Program.js
Enrollment.js
routes/
programRoutes.js
enrollmentRoutes.js
middleware/
errorHandler.js
server.js
package.json
.env

### Frontend
frontend/
src/
App.js
App.css
api/
api.js
components/
ProgramList.js
ProgramCard.js

## Execution & Running
# Prerequisites
- Node.js installed
- MongoDB installed
- MongoDB running

# Backend Execution
-> cd backend
-> npm install
-> create an env file
{
MONGO_URI=mongodb://localhost:27017/fittrack 
PORT=5000
}
->node server.js
#output
MongoDB connected
Server running on port 5000

# Frontend Execution
-> cd frontend
-> npm install
-> npm start

## Try
POST 
->postman->new Request->POST : http://localhost:5000/api/programs -> body -> raw -> json
{
  "name": "Lean Muscle Builder",
  "category": "Fitness",
  "level": "Intermediate",
  "price": 699
}
->send

#output
Screenshots are available for the evaluating the required outputs

##Expected Output
#Frontend
List of programs displayed as cards with:
Name, category, level, price
Enroll button
Clicking Enroll shows:
Success message
Already enrolled message if duplicate
Enrolled programs are listed below
