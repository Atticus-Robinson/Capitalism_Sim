INSERT INTO department (name) 
VALUES  
    ('HR'),
    ('Engineering'),
    ('Sales'),
    ('Accounting');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Network Engineer', 80000, 2);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
    ('Jim', 'Henson', 1, 1);