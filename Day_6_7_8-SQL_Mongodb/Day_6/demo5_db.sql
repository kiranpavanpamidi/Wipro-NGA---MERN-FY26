use course_db;
select * from users;
select * from courses;
select * from enrollments;
-- natural join
select * from users natural join courses natural join enrollments;
-- left join
select * from users u left join enrollments e on u.userid = e.userid left join courses c on e.courseid = c.courseid;
-- right join
select u.username , c.coursename from users u right join enrollments e on u.userid = e.userid right join courses c on e.courseid = c.courseid;
-- self join
select u1.username,u2.username,u1.city from users u1 ,users u2 where u1.userid <> u2.userid and u1.city=u2.city order by u1.city;
-- inner join
select * from users u inner join enrollments e on u.userid = e.userid inner join courses c on e.courseid = c.courseid;
-- full join
-- select * from users u full join enrollments e on u.userid = e.userid full join courses c on e.courseid = c.courseid;
-- some MySQL does not support full join so we can use union
select *
from users u
left join enrollments e on u.userid = e.userid
left join courses c on e.courseid = c.courseid
union
select *
from users u
right join enrollments e on u.userid = e.userid
right join courses c on e.courseid = c.courseid;
