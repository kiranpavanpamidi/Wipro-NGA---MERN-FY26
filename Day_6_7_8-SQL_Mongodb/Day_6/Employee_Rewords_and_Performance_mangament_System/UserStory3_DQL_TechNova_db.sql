-- =============================================
-- USER STORY 3: GENERATE INSIGHTS (DQL)
-- =============================================
use TechNovaDB;
-- 1. Employees who joined after 2019-01-01
select *from Employee where HireDate > '2019-01-01';

-- 2. Average performance rating by department
select d.DeptName, avg(p.Rating) as AvgRating
from Department d
join Employee e on d.DeptID = e.DeptID
join Performance p on e.EmpID = p.EmpID
group by d.DeptName;

-- 3. List employees with their age
select EmpName, TimeStampDiff(year, DOB, CURDATE()) as Age from Employee;

-- 4. Total rewards given in the current year
select SUM(RewardAmount) as TotalRewards
from Reward
where year(STR_TO_DATE(RewardMonth, '%b-%Y')) = year(CURDATE());

-- 5. Employees with rewards greater than 2000
select e.EmpName, r.RewardAmount
from Employee e
join Reward r on e.EmpID = r.EmpID
where r.RewardAmount > 2000;