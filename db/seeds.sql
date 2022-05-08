INSERT INTO departments (name) 
VALUES  
    ('Sales'),
    ('Accounting'),
    ('HR'),
    ('Operations'),
    ('Management');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Salesman', 80000, 1),
    ('Accountant', 90000, 2),
    ('HR Rep', 70000, 3),
    ('District Manager', 100000, 5);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Scott', 4, NULL),
    ('Pam', 'Beesly', 2, 1),
    ('Jim', 'Halpert', 1, 1),
    ('Dwight', 'Schrute', 1, 3),
    ('Philis', 'Vance', 1, 3),
    ('Stanley', 'Hudson', 1, 3),
    ('Andy', 'Bernard', 1, 3),
    ('Oscar', 'Nunez', 2, 1),
    ('Angela', 'Martin', 2, 8),
    ('Kevin', 'Malone', 2, 8),
    ('Kelly', 'Kapoor', 3, 1),
    ('Toby', 'Flenderson', 3, 1);
