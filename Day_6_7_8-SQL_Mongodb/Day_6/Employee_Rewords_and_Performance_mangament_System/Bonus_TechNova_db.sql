-- =============================================
-- BONUS CHALLENGES
-- =============================================

-- 1. View combining Employee, Department, and Performance
create view EmployeePerformanceView as
select e.EmpName, d.DeptName, p.ProjectName, pf.Rating, pf.ReviewDate
from Employee e
join Department d on e.DeptID = d.DeptID
join Performance pf on e.EmpID = pf.EmpID
join Project p on pf.ProjectID = p.ProjectID;

-- 2. Stored Procedure: GetTopPerformers(deptName)
DELIMITER //
create procedure GetTopPerformers(in deptName varchar(50))
begin
  select e.EmpName, d.DeptName, pf.Rating
  from Employee e
  join Department d on e.DeptID = d.DeptID
  join Performance pf on e.EmpID = pf.EmpID
  where d.DeptName = deptName
  order by pf.Rating desc
  limit 3;
end //
DELIMITER ;
call GetTopPerformers('IT');
