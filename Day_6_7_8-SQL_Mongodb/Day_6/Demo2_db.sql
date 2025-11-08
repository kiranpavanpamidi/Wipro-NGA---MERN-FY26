create database practice2_db;
use practice2_db;
create table invester(
id int primary key,name varchar(50),
segment varchar(50),
amount decimal(5,2),
year int,
shares int);

insert into invester value
(1, 'ram', 'auto', 2.0, 2010, 1500),
(2, 'sam', 'banking', 5.0, 2010, 345),
(3, 'som', 'currency', 2.4, 2010, 256),
(4, 'sasi', 'navratna', 1.5, 2011, 1345),
(5, 'tom', 'pharma', 1.6, 2011, 1200),
(6, 'sasi', 'IT', 7.0, 2011, 1323),
(7, 'tom', 'FMCG', 5.0, 2011, 145),
(8, 'sam', 'cement', 3.0, 2012, 1567),
(9, 'ram', 'energy', 2.5, 2012, 1245),
(10, 'ram', 'construction', 3.2, 2013, 1356),
(11, 'ram', 'auto', 1.8, 2013, 1234),
(12, 'som', 'banking', 3.4, 2013, 234),
(13, 'sam', 'currency', 2.0, 2013, 656),
(14, 'sasi', 'navratna', 5.0, 2015, 3657),
(15, 'som', 'pharma', 2.5, 2015, 564),
(16, 'tom', 'IT', 3.0, 2015, 676),
(17, 'ram', 'FMCG', 4.0, 2016, 1456),
(18, 'sasi', 'energy', 3.6, 2016, 1789),
(19, 'sam', 'construction', 4.5, 2016, 987),
(20, 'som', 'auto', 2.3, 2017, 1112),
(21, 'tom', 'navratna', 1.9, 2017, 999),
(22, 'sasi', 'banking', 4.8, 2018, 1423),
(23, 'ram', 'pharma', 2.7, 2018, 1678),
(24, 'sam', 'IT', 3.1, 2019, 765),
(25, 'tom', 'cement', 5.2, 2020, 1543);
select * from invester;
select name,count(*) from invester group by name;
select distinct name from invester;
select name ,count(*),sum(amount)"Amount-lakhs" from invester Group By name;
select name,count(*),sum(amount)"Amount-lakhs" from invester group by name order by `Amount-lakhs`;
select name,sum(amount)"Amount-lakhs" from invester group by name having `Amount-lakhs` > 16.50 order by `Amount-lakhs` desc;