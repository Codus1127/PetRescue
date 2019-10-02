drop table if exists users;

create table users (
user_id serial primary key,
username varchar,
email varchar,
is_admin boolean,
hash text
);

create table shelter(
location_id serial primary key,
location_name varchar(100),
location_address varchar(255),
location_phone varchar(20)
);

create table species (
species_id serial primary key,
species varchar(30)
);

create table animals (
animal_id serial primary key,
species_id int references species(species_id),
location_id int references shelter(location_id)
);

create table dogs (
animal_id int references animals(animal_id),
dog_id serial primary key,
dog_name varchar(50),
breed varchar,
gender varchar(10),
dog_age int,
species_id int references species(species_id),
location_id int references shelter(location_id),
description varchar(2000)
);

create table cats (
animal_id int references animals(animal_id),
cat_id serial primary key,
cat_name varchar(50),
breed varchar,
gender varchar(10),
cat_age int,
species_id int references species(species_id),
location_id int references shelter(location_id),
description varchar(2000)
);

select * from cats