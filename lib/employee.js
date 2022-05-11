const inquirer = require("inquirer");
const db = require("../db/connection");
const cTable = require("console.table");
const { Department, Role, Employee } = require("../utils/constructors");

const viewEmployees = async () => {
  let sql = `SELECT
            e.id,
            e.first_name AS "First Name",
            e.last_name AS "Last Name",
            departments.name AS Department,
            roles.title AS Title,
            roles.salary AS Salary,
            CONCAT(m.first_name, " ", m.last_name) AS Manager
            FROM employees e
            LEFT JOIN roles
            ON e.role_id = roles.id
            LEFT JOIN departments
            ON roles.department_id = departments.id
            LEFT JOIN employees m
            ON e.manager_id = m.id`;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

const addEmployee = async () => {
  let currentRoles, currentEmployees;
  await db
    .promise()
    .query(`SELECT roles.title FROM roles`)
    .then(([rows]) => (currentRoles = rows.map((row) => row.title)));
  await db
    .promise()
    .query(`SELECT employees.first_name FROM employees`)
    .then(([rows]) => (currentEmployees = rows.map((row) => row.first_name)));

  await inquirer
    .prompt([
      {
        name: "first_name",
        message: "Enter the first name of the employee...",
        type: "input",
      },
      {
        name: "last_name",
        message: "Enter the last name of the employee...",
        type: "input",
      },
      {
        name: "role",
        message: "Choose the role of the employee...",
        type: "list",
        choices: currentRoles,
      },
      {
        name: "manager",
        message: "Choose the employee's manager",
        type: "list",
        choices: currentEmployees,
      },
    ])
    .then(async (answer) => {
      let role_id, manager_id;
      await db
        .promise()
        .query(`SELECT id FROM roles WHERE title = "${answer.role}"`)
        .then(([row]) => (role_id = row[0].id));

      await db
        .promise()
        .query(
          `SELECT id FROM employees WHERE first_name = "${answer.manager}"`
        )
        .then(([row]) => (manager_id = row[0].id));

      await db.promise().query(
        `
        INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES 
        ('${answer.first_name}', '${answer.last_name}', ${role_id}, ${manager_id})
        `
      );
    });
};

const updateEmployee = async () => {
  let currentEmployees, currentRoles;
  await db
    .promise()
    .query(
      `SELECT CONCAT(first_name, " ", last_name) AS employees FROM employees`
    )
    .then(([rows]) => (currentEmployees = rows.map((row) => row.employees)));
  await db
    .promise()
    .query(`SELECT roles.title FROM roles`)
    .then(([rows]) => (currentRoles = rows.map((row) => row.title)));

  await inquirer
    .prompt([
      {
        name: "employee",
        message: "Select the employee to update...",
        type: "list",
        choices: currentEmployees,
      },
      {
        name: "role",
        message: "Select their new role...",
        type: "list",
        choices: currentRoles,
      },
    ])
    .then(async (answer) => {
      let role_id, employee_id;
      await db
        .promise()
        .query(`SELECT id FROM roles WHERE title = "${answer.role}"`)
        .then(([row]) => (role_id = row[0].id));

      await db
        .promise()
        .query(
          `SELECT id FROM employees WHERE CONCAT(first_name, " ", last_name) = "${answer.employee}"`
        )
        .then(([row]) => (employee_id = row[0].id));

      await db.promise().query(
        `UPDATE employees
        SET role_id = ${role_id}
        WHERE id = ${employee_id}
        `
      );
    });
};

module.exports = {
  viewEmployees,
  addEmployee,
  updateEmployee,
};
