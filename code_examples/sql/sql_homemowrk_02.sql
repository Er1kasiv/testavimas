select * from film;

select length, count(*) as count_films, max(replacement_cost), min(replacement_cost) 
from film
where length >= 60
-- where length >= 60 and count(*) > 5 -- agreguoto stulpelio cia negalime deti
-- where length >= 60 and count_films > 5 -- agreguoto stulpelio cia negalime deti
group by length
having count(*) > 5 and max(replacement_cost) < 29.99
order by 2 desc;

/*
	JOIN
*/


select customer_id, address_id, first_name, last_name, email from customer 
select address_id, city_id, address from address;
select city_id, country_id, city from city;
select country_id, country from country where country like 'United States';

select 
	c.customer_id, c.address_id, c.first_name, c.last_name, c.email, 
	a.city_id, a.address,
	ct.city,
	cn.country
from customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ct ON a.city_id = ct.city_id
JOIN country cn ON ct.country_id = cn.country_id
where country = 'United States';


select film_id, language_id, title from film;
select language_id, name from language;

select 
	f.film_id, f.language_id, f.title,
	l.name
from film f
right join language l on f.language_id = l.language_id
order by language_id desc;
-- where l.language_id = 4;

