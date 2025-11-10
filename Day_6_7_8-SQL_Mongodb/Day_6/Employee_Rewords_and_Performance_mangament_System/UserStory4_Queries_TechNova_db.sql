-- =============================================
-- USER STORY 4: ADVANCED QUERIES
-- =============================================

-- 1. Employee Name, Department Name, Project Name, and Rating
select e.EmpName, d.DeptName, p.ProjectName, pf.Rating
from Employee e
join Department d on e.DeptID = d.DeptID
join Performance pf on e.EmpID = pf.EmpID
join Project p on pf.ProjectID = p.ProjectID;

-- 2. Highest-rated employee in each department
select d.DeptName, e.EmpName, p.Rating
from Employee e
join Department d on e.DeptID = d.DeptID
join Performance p on e.EmpID = p.EmpID
where (e.EmpID, p.Rating) in (
  select EmpID, max(Rating)
  from Performance
  group by EmpID
);

-- 3. Employees who have not received any rewards
select EmpName
from Employee
where EmpID not in(select EmpID from Reward);