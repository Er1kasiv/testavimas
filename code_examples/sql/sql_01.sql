-- select * from city;
-- select * from country;

/*
komentaras
*/

-- select city_id, country_id, city, city from city;

select * from country where country = 'Lithuania';

select * from city where country_id = 56; -- city_ id = 570

select * from address where city_id = 570; -- address_id = 563

select * from customer where address_id = 563;


select distinct country_id from city where country_id = 101;

select distinct first_name from customer order by first_name; -- asc, desc
select distinct first_name, last_name from customer order by first_name; -- asc, desc

select distinct first_name, last_name 
from customer 
where first_name = 'Aaron' 
order by first_name;


select *
from film 
where title like 'C_o%' and rental_rate >= 2.99
order by title;

select count(first_name)
from customer; 

select first_name, count(first_name)
from customer 
group by first_name 
order by 2 desc;
-- order by count(first_name) desc;


