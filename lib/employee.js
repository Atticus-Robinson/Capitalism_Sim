const inquirer = require("inquirer");
const db = require("../db/connection");
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
      console.log(answer.first_name);
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

      console.log(role_id);
      console.log(manager_id);
      await db.promise().query(
        `
        INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES 
        ('${answer.first_name}', '${answer.last_name}', ${role_id}, ${manager_id})
        `
      );
    });
};

module.exports = {
  viewEmployees,
  addEmployee,
};
