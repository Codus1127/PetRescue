insert into users (name, email, is_admin)
values (${name}, ${email}, false)
returning users_id;