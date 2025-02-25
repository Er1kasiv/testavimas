--1
select first_name, last_name from actor order by last_name desc
--2
select first_name, last_name from actor order by first_name desc
--3
select first_name from actor
--4
SELECT title, rental_rate, length from film order by length asc;
--5
select first_name, count(*) as count from actor group by first_name;
--6
select sum(amount) as "bendra suma" from payment;
--7 
select max(amount) as "Didžiausias mokėjimas" 
from payment;
-- 8
select customer_id, MAX(amount) AS max_payment 
from payment 
group by customer_id 
order by max_payment desc;
-- 9
select * from actor 
where first_name = 'Nick';
-- 10
select title, description, release_year, rating 
from film 
where rating = 'PG';
-- 11
select title, rental_duration, rental_rate 
from film 
where rental_rate <= 4.99 
and rental_duration in (5, 6);
--12
select * 
from film 
where description like 'Trailers%';
--13
select title 
from film 
where title like 'Z%';
-- 14
select title, rental_rate, replacement_cost, 
       (rental_rate + replacement_cost) as total 
from film;
-- 15
select title, rental_rate, length 
from film 
where rental_rate = 2.99 
or length = 130;
-- 16
select * 
from rental 
where return_date is null;
--17
select * from rental 
where rental_date between '2005-05-24 22:54:33' and '2005-05-24 23:05:21';