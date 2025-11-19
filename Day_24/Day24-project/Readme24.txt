Day 24 — File Uploads & Real-Time Communication

### Details
A full backend + frontend demo that handles file uploads and supports real-time chat using Node.js, Express, Multer, Socket.io, and React.

### Features
Challenge 1.
File Upload (PDF Only)
Instructors can upload PDF course materials.
Multer stores uploaded files in /uploads/ folder.
Filenames are sanitized with timestamps.

Challenge 2. 
Serve Static Files
Students can download uploaded PDFs through a public route.

Challenge 3. 
Real-Time Chat (Socket.io)
Students and instructors can chat live.
Messages instantly appear for all users.
Uses WebSockets for bi-directional communication.

### File Stucture
Day24-project/
 ├── backend/
 │    ├── server.js
 │    ├── uploads/
 │    └── package.json
 └── frontend/
      ├── public/
      │     ├── index.html
      │     └── chat-test.html 
      ├── src/
      │     ├── App.js
      │     └── Chat.js
      └── package.json

### Running Program
# Backend Setup
>cd backend
>npm install express multer cors socket.io
>node server.js

##Testing Uploads (Postman)
->open postman ->New Request ->use POST http://localhost:5000/upload
->body ->form-data
->Key	Type	Value
file	File	Select a PDF(PDF for test is there in backend/uploads)
->send

##Testing File Download
- open Brower
>http://localhost:5000/materials/<uploaded-file-name>.pdf


# Frontend setup  //open in new terminal
- Testing Real-Time Chat
>cd frontend
>npm install
>npm start

## In the browser open 2(two) tabs
- opens automatically 
> http://localhost:3000
- to test
>http://localhost:3000/Chat-test.html
//test by typing and clicking on send.

