-- =============================================
-- USER STORY 5: TRANSACTION CONTROL
-- =============================================
use TechNovaDB;
start transaction;

insert into Employee values (6, 'Meena', 'F', '1997-03-18', '2023-07-10', 101);
insert into Performance values (6, 205, 4.2, '2023-09-01');

COMMIT;