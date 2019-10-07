insert into pets (pet_type, location_id, img, pet_name, breed, gender, pet_age, color, weight, description)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

select * from pets;