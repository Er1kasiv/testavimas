--1
select 
    s.first_name as staff_first_name, 
    s.last_name as staff_last_name, 
    c.first_name as customer_first_name, 
    c.last_name as customer_last_name, 
    s.store_id
from staff s
join customer c on s.store_id = c.store_id;
--2
select 
    c.first_name, 
    c.last_name, 
    p.amount, 
    p.payment_date
from customer c
join payment p on c.customer_id = p.customer_id
where p.amount in (2.99, 4.99, 6.99);
--3
select 
    p.payment_id, 
    p.payment_date, 
    p.amount, 
    c.first_name as customer_first_name, 
    c.last_name as customer_last_name, 
    s.first_name as staff_first_name, 
    s.last_name as staff_last_name
from payment p
join customer c on p.customer_id = c.customer_id
join staff s on p.staff_id = s.staff_id;
--4
select 
    c.first_name as customer_first_name, 
    c.last_name as customer_last_name, 
    s.first_name as staff_first_name, 
    s.last_name as staff_last_name, 
    sum(p.amount) as total_spent
from payment p
join staff s on p.staff_id = s.staff_id
group by c.customer_id, s.staff_id
HAVING SUM(p.amount) between 150 and 200
order by total_spent asc;
--5
select distinct f.title
from film f
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
where DATE(r.rental_date) = '2006-02-14';
--6
select 
    c.first_name, 
    c.last_name, 
    ci.city
from customer c
join address a on c.address_id = a.address_id
join city ci on a.city_id = ci.city_id
JOIN country co on ci.country_id = co.country_id
where co.country = 'Greece';
--7
select 
    c.first_name, 
    c.last_name, 
    count(r.rental_id) AS rental_count
from customer c
JOIN rental r on c.customer_id = r.customer_id
group by c.customer_id
having count(r.rental_id) > 2;


