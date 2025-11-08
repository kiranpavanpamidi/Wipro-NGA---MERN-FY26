CREATE DATABASE IF NOT EXISTS course_db;
USE course_db;

-- USERS table
CREATE TABLE users (
  userid INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50),
  mobile VARCHAR(15),
  city VARCHAR(50)
);

INSERT INTO users VALUES
(1, 'ram', 'ram@abc.com', '987634343', 'Hyderabad'),
(2, 'sushma', 'sushma@abc.com', '987634343', 'Banglore'),
(3, 'ashok', 'ashok@abc.com', '987634343', 'Chennai'),
(4, 'kiran', 'kiran@abc.com', '987634343', 'Delhi'),
(5, 'dev', 'dev@abc.com', '987634343', 'Hyderabad'),
(6, 'vijay', 'vijay@abc.com', '987634343', 'Banglore'),
(7, 'ramana', 'ramana@abc.com', '987634343', 'Pune'),
(8, 'teja', 'teja@abc.com', '987634343', 'Mumbai'),
(9, 'rohit', 'rohit@abc.com', '987634343', 'Mumbai'),
(10, 'srikanth', 'sri@abc.com', '987634343', 'Hyderabad');

-- COURSES table
CREATE TABLE courses (
  courseid INT PRIMARY KEY,
  coursename VARCHAR(50),
  courseduration INT,
  coursefee INT
);

INSERT INTO courses VALUES
(101, 'C-Programming', 30, 5000),
(102, 'Python', 40, 10000),
(103, 'MachineLearning', 90, 50000),
(104, 'Cloud', 60, 20000),
(105, 'DevOps', 60, 30000),
(106, 'Testing', 30, 5000),
(107, 'Spark', 35, 20000),
(108, 'CyberSecurity', 45, 30000);

-- ORDERS / ENROLLMENTS table
CREATE TABLE enrollments (
  oid INT PRIMARY KEY,
  courseid INT,
  userid INT,
  FOREIGN KEY (courseid) REFERENCES courses(courseid),
  FOREIGN KEY (userid) REFERENCES users(userid)
);

INSERT INTO enrollments VALUES
(1002, 104, 2),
(1003, 101, 4),
(1004, 105, 5),
(1005, 107, 3),
(1006, 107, 3),
(1007, 108, 5),
(1010, 101, 10),
(1011, 102, 4),
(1012, 106, 7),
(1013, 104, 4),
(1014, 104, 7),
(1015, 105, 3),
(1017, 103, 3),
(1019, 102, 8),
(1020, 106, 9);
