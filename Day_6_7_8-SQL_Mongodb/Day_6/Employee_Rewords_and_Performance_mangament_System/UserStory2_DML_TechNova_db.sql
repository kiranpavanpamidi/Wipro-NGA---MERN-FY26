-- =============================================
-- USER STORY 2: INSERT & MANAGE DATA (DML)
-- =============================================
use TechNovaDB;
insert into Department values
(101, 'IT', 'Bangalore'),
(102, 'HR', 'Delhi'),
(103, 'Finance', 'Mumbai'),
(104, 'Marketing', 'Chennai'),
(105, 'Operations', 'Hyderabad');

insert into Employee values
(1, 'Asha', 'F', '1990-07-12', '2018-06-10', 101),
(2, 'Raj', 'M', '1988-04-09', '2020-03-22', 102),
(3, 'Neha', 'F', '1995-01-15', '2021-08-05', 101),
(4, 'Vikram', 'M', '1992-11-20', '2022-02-14', 103),
(5, 'Kiran', 'M', '1996-09-02', '2019-09-01', 104);

insert into Project values
(201, 'Payroll System', 103, '2023-01-10', '2023-06-30'),
(202, 'E-Commerce App', 101, '2022-05-15', '2023-01-15'),
(203, 'HR Portal', 102, '2023-03-10', '2023-08-10'),
(204, 'Marketing Analytics', 104, '2022-09-01', '2023-02-28'),
(205, 'ERP Upgrade', 101, '2023-04-01', '2023-10-01');

insert into Performance values
(1, 202, 4.5, '2023-06-01'),
(2, 203, 3.8, '2023-08-01'),
(3, 205, 4.7, '2023-09-15'),
(4, 201, 4.1, '2023-07-25'),
(5, 204, 4.3, '2023-10-10');

insert into Reward values
(1, 'Jan-2024', 2500),
(2, 'Feb-2024', 1800),
(3, 'Mar-2024', 3000),
(4, 'Apr-2024', 900),
(5, 'May-2024', 2100);

update Employee set DeptID = 103 where EmpID = 2;

set SQL_SAFE_UPDATES = 0;

delete from Reward where RewardAmount < 1000;

set SQL_SAFE_UPDATES = 1;
