
-- 1. Parašykite užklausą, kuri ištrauktų stulpelus „first_name“, „last_name“  iš lentelės „actor“ 
-- surušiuotus pagal „last_name“ mažėjimo tvarka.  
select * from actor;


-- 2.Parašykite užklausą, kuri ištrauktų stulpelus „first_name“, „last_name“  iš lentelės „actor“ 
-- sugrupuotus pagal stulpelį „first_name“ ir surušiuotus pagal „first_name“ mažėjimo tvarka. 

-- 3.Parašykite SQL užklausą, kuri ištrauktų visas skirtingas stulpelio „first_name“  reikšmes iš lentelės 
-- „actor“. 

-- 4.Parašykite SQL užklausą, kuri pateiktų filmo pavadinimą, nuomos kainą ir filmo trukmę, pagal filmo 
-- trukmę nuo trumpiausio iki ilgiausio. Naudokite lentelę „film“. 

-- 5.Parašykite SQL užklausą, kuri nurodo kiek kartų pasikartojo kiekvienas aktoriaus vardas. 
-- Naudokite lentelę „actor“. 

-- 6.Parašykite SQL užklausą, kuri paskaičiuoja bendrą visų mokėjimų sumą. Rezultatą pateikite  
-- stulpelyje „Iš viso“. Naudokite lentelę „payment“.  

-- 7.Parašykite SQL užklausą, kuri ištraukia didžiausią atliktą įmoką. Rezultatą pateikite stulpelyje  
-- „Didžiausias mokėjimas”. Naudokite lentelę „payment“. 


-- 8.Parašykite SQL užklausą, kuri pateikia kiekvieno kliento didžiausią mokėjimą mažėjimo tvarka.  
-- Naudokite lentelę „payment“.

-- 9.Parašykite SQL užklausą, kuri ištrauktų visus stulpelius iš lentelės „actor“ , kur stulpelio „first_name“ 
-- reikšmė yra Nick.  

-- 10.Parašykite SQL užklausą, kuri pateiktų filmo pavadinimą, aprašymą, išleidimo metus, reitingą, kai reitingas 
-- yra PG. Naudokite lentelę „film“.  
select title, description, release_year, rating 
from film 
where rating = 'PG'; 


-- 11.Parašykite SQL užklausą, kuri ištrauktų filmo pavadinimą, nuomos trukmę, nuomos kainą, kai nuomos 
-- kaina yra 4.99 arba mažiau, o nuomos trukmė 5 ir 6. Naudokite lentelę „film“. 

-- 12.Parašykite SQL užklausą, kuri ištrauktų visus filmus, kurių žanro aprašymas prasideda žodžiu 
-- “Trailers”. Naudokite lentelę „film“. 

-- pirmas elementas yra 'Trailers'
select * 
from film
where special_features[1] = 'Trailers';

-- Zandras 'Trailers' yra betkurioje masyvo vietoje
SELECT * 
FROM film
WHERE 'Trailers' = ANY(special_features);

-- 13.Parašykite užklausą, kuri ištraukia visus filmų pavadinimus, kurie prasideda raide „z“. Naudokite  
-- lentelę „film“.  

-- 14.Parašykite SQL užklausą, kuri ištraukia filmo pavadinimą, nuomos kainą, (pavėluoto) grąžinimo  
-- kainą, o bendra nuomos kaina ir (pavėluoto) grąžinimo kaina pateikiama naujame stulpelyje “total”.  
-- Naudokite lentelę „film“.  

-- 15.Parašykite SQL užklausą, kuri ištrauktų filmų pavadinimus, nuomos kainą, trukmę, kai nuomos kaina  
-- yra 2.99 arba trukmė yra 130. Naudokite lentelę „film“. 

-- 16.Parašykite užklausą, pateikiančią visus klientus, kurie dar negrąžino išsinuomotų filmų. Naudokite  
-- lentelę “rental”. 

-- 17.Parašykite SQL užklausą, kuri pateikia visą informaciją apie nuomą tarp išnuomavimo laikotarpių  
-- '2005-05-24 22:54:33' ir '2005-05-24 23:05:21'. Naudokite lentelę “rental”.  

select *
from rental
where TO_CHAR(rental_date, 'mm') = '05'
-- where TO_CHAR(rental_date, 'dd/mm/yyyy') = '2005-05-24'
-- where TO_CHAR(rental_date, 'dd/mm/yyyy') = '24/05/2005'
-- where date(rental_date) = '2005-05-24'



