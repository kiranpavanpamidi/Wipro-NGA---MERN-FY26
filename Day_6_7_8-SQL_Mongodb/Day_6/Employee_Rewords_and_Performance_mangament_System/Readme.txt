<-- TechNova Pvt. Ltd. — Employee Rewards & Performance Management System -->

# Overview

This project implements a comprehensive SQL-based Employee Rewards & Performance Management System for TechNova Pvt. Ltd..
It demonstrates key database concepts including DDL, DML, DQL, transactions, indexing, views, and stored procedures in MySQL.

# Objectives

Design and implement a normalized relational database.
Manage and analyze employee performance and reward data.
Demonstrate transaction control, query optimization, and reusable database objects.

# Database Details
# Database Name

TechNovaDB

Tables Created
Table Name	Description
Department	Stores department information.
Employee	Stores employee personal and job details.
Project	Contains project details under various departments.
Performance	Tracks employee performance ratings on projects.
Reward	Records employee rewards by month and amount.
Database Schema

# Relationships:
Each Employee belongs to one Department.
Each Project is assigned to one Department.
Each Performance record links an Employee with a Project.
Each Reward belongs to one Employee.

# Features by User Stories
USER STORY 1: Database Setup (DDL)
Create TechNovaDB and all required tables.
Define primary and foreign keys for data integrity.
Create indexes for optimized queries.

USER STORY 2: Insert & Manage Data (DML)
Insert initial data into all tables.
Update an employee’s department.
Delete reward records with amounts below 1000.
(Note: Safe Update Mode fix included.)

USER STORY 3: Generate Insights (DQL)
Employees who joined after 2019-01-01.
Average performance rating by department.
Calculate employee ages.
Total rewards in the current year.
Employees receiving rewards > 2000.

USER STORY 4: Advanced Queries
Join employee, department, project, and performance details.
Find the highest-rated employee in each department.
List employees without any rewards.

USER STORY 5: Transaction Control
Use START TRANSACTION, COMMIT, and ROLLBACK.
Ensures atomicity during multi-table inserts.

Bonus Challenges
1. View: EmployeePerformanceView
Combines Employee, Department, Project, and Performance info for simplified reporting.
2. Stored Procedure: GetTopPerformers(deptName)
Returns top 3 performers from a specific department, sorted by rating.
we can use this :- CALL GetTopPerformers('IT');

# How to Run
Open MySQL Workbench.
Copy and paste the SQL script into a new query window.
Run the script sequentially.
Explore the database using:
	USE TechNovaDB;
	SHOW TABLES;
	SELECT * FROM EmployeePerformanceView;


the End.