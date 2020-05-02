//Count all users
//SQL
SELECT
    COUNT(*)
FROM
    users;

//ActiveRecord
User.count

//Count active users
//SQL
SELECT
    COUNT(*)
FROM 
    users
WHERE
    users.active = true;

//ActiveRecord
User.where(:active => "TRUE").count;

//Count all users who visited the site within a certain time period
//SQL
SELECT
    COUNT(*)
FROM
    users
WHERE
    users.last_login BETWEEN :time_period_start AND :time_period_end ;

User.where(last_login: (time_period_start..time_period_end)).count;