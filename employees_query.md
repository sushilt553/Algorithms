SELECT
    employees.*
FROM
    employees e
JOIN
    departments d on e.department_id = d.id
WHERE
    d.name = ?