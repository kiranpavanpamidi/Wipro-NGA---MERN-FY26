Day 26 — Database Connectivity

### Details
This module focuses on implementing persistent storage using both SQL (MySQL) and NoSQL (MongoDB) databases, along with Sequelize ORM to manage relational models efficiently.

### Features
1.MySQL Integration
Connect to MySQL using mysql2
Insert course data into the courses table
Confirmation message on successful insertion

2.MongoDB Integration (Mongoose)
User and Enrollment models
Enrollment lookup with populated user details
Fetch and display all enrollments

3.Sequelize ORM
Define Instructor and Course models
One-to-Many relationship
Fetch all courses created by an instructor

### Folder Structure
Day_26/
Database_Connectivity/
│
├── Day26_mysql/
│   ├── db.js
│   ├── insertCourse.js
│   └── .env
│
├── Day26_mongodb/
│   ├── connect.js
│   ├── fetchEnrollments.js
│   ├── models/
│   │   ├── User.js
│   │   └── Enrollment.js
│   └── .env
│
└── Day26_sequelize/
    ├── models/
    │   ├── index.js
    │   ├── Course.js
    │   └── Instructor.js
    ├── query.js
    └── .env

### Execution
Challenge 1:
>cd Day26_mySQL
>npm install
>node insertCourse.js

Challenge 2:
>cd Day26_mongodb
>npm install
>node fetchEnrollments.js

Challenge 3:
>cd Day26_sequelize
>npm install
>node query.js



