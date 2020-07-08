SELECT
    COUNT(*) as total_users
FROM 
    users

User.count

SELECT
    COUNT(*) as total_users
FROM
    users
WHERE
    users.active = true

User.where({active: true}).count

SELECT
    COUNT(*) as total_users
FROM
    users
WHERE
    users.last_login BETWEEN users.start_time and users.end_time

User.where(last_login: (start_time..end_time)).count;