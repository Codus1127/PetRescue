drop table if exists users;

create table users (
    users_id serial primary key,
    name varchar(100),
    email varchar(100)
);

create table users_login (
    users_login_id serial primary key,
    users_id int references users(users_id),
    hash TEXT
);

create table shelter(
location_id serial primary key,
location_name varchar(100),
location_address varchar(255),
location_phone varchar(20)
);


create table pets (
pet_id serial primary key,
pet_type varchar,
location_id int references shelter(location_id),
img text,
pet_name varchar(50),
breed varchar,
gender varchar(10),
pet_age int,
color varchar,
weight varchar,
description varchar(2000)
);


insert into pets (pet_type, location_id, img, pet_name, breed, gender, pet_age, color, weight, description)
values ('dog', 1, 'https://petharbor.com/get_image.asp?RES=Detail&ID=A115907&LOCATION=UTAH', 'Bonneville', 'Pit Bull Terrier', 'Female', 5, 'White and brown', 'unknown', 'extremely playful and friendly.' )

insert into shelter (location_name, location_address, location_phone)
values
('Humane Society of Utah', '4242 S 300 W, Murray, UT 84107', '(801) 261-2919'),
('Utah Animal Adoption Center', '1955 N Redwood Rd, Salt Lake City, UT 84116', '(801) 355-7387')

select * from pets;