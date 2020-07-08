SELECT
    employees.*
FROM 
    employees
JOIN
    departments on departments.id = employees.dept_id
WHERE
    departments.name = "Name of the department"