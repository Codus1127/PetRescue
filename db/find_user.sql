select u.users_id, name, email, is_admin, hash from users u
join users_login ul on u.users_id = ul.users_id
where email = $1;