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

module.exports = {
  viewEmployees,
};
