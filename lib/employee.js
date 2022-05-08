const inquirer = require("inquirer");
const db = require("../db/connection");
const { Department, Role, Employee } = require("../utils/constructors");

const viewEmployees = async () => {
  let sql = `SELECT
            id,
            first_name AS "First Name",
            last_name AS "Last Name",
            roles_id AS "Role",
            CONCAT(manager.first_name, " ", manager.last_name) AS manager
            FROM employee`;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

const viewByManager = async ({ manager }) => {
  let managers;
  await db
    .promise()
    .query(
      `
      
      `
    )
    .then((rows) => (managers = rows[0].map((row) => row.manager)))
    .catch((err) => console.log(err));

  await inquirer
    .prompt([
      {
        type: "list",
        name: "manager",
        message: "Choose from this list of managers:",
        choices: managers,
      },
    ])
    .then((choice) => viewEmployeesByManager(choice))
    .catch((err) => console.log(err));

  let sql = `SELECT
  e.id,
  e.first_name,
  e.last_name,
  roles.job_title,
  departments.name AS department,
  roles.salary,
  CONCAT(m.first_name, " ", m.last_name) AS manager
  FROM employees e
  LEFT JOIN roles
  ON e.role_id = roles.id
  LEFT JOIN departments
  ON roles.department_id = departments.id
  LEFT JOIN employees m
  ON e.manager_id = m.id
  WHERE CONCAT(m.first_name, " ", m.last_name) = "${manager}"`;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

module.exports = {
  viewEmployees,
  viewByManager,
};
