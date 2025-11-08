use practice2_db;
select * from invester;
select name,segment,amount,year from invester where name='sam' and segment='IT';
select name ,segment,amount,year from invester where name='sasi' or segment='IT';
select * from invester where name like '_a%';
select * from invester where name like 'sa%';
-- Aggrigate Function
select name,avg(amount) from invester group by name;
select name,max(amount) from invester group by name;
select name,min(amount) from invester group by name;
select name,sum(amount) from invester group by name;
select name,round(avg(amount)) from invester group by name;