-- =============================================
--  TechNova Pvt. Ltd. - Employee Rewards & Performance Management System
--
-- USER STORY 1: DATABASE SETUP (DDL)
-- =============================================

create database TechNovaDB;
use TechNovaDB;

create table Department (
  DeptID int primary key,
  DeptName varchar(50) not null unique,
  Location varchar(50)
);

create table Employee (
  EmpID int primary key,
  EmpName varchar(50) not null,
  Gender enum('M', 'F'),
  DOB date,
  HireDate date,
  DeptID int,
  foreign key (DeptID) references Department(DeptID)
);

create table Project (
  ProjectID int primary key,
  ProjectName varchar(100) not null,
  DeptID int,
  StartDate date,
  EndDate date,
  foreign key (DeptID) references Department(DeptID)
);

create table Performance (
  EmpID int, 
  ProjectID int ,
  Rating decimal(3,2),
  ReviewDate date,
  primary key (EmpID, ProjectID),
  foreign key (EmpID) references Employee(EmpID),
  foreign key (ProjectID) references Project(ProjectID)
);

create table Reward (
  EmpID int,
  RewardMonth varchar(20),
  RewardAmount decimal(10,2),
  foreign key (EmpID) references Employee(EmpID)
);

create index idx_empname on Employee(EmpName);
create index idx_deptid on Employee(DeptID);
