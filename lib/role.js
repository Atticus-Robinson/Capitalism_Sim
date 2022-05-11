const inquirer = require("inquirer");
const db = require("../db/connection");
const cTable = require("console.table");
const { Department, Role, Employee } = require("../utils/constructors");

const viewRoles = async () => {
  let sql = `SELECT * FROM roles`;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

const addRole = async () => {
  let currentDepartments;
  await db
    .promise()
    .query(`SELECT departments.name FROM departments`)
    .then(([rows]) => (currentDepartments = rows.map((row) => row.name)));

  await inquirer
    .prompt([
      {
        name: "title",
        message: "Enter the role you would like to add...",
        type: "input",
      },
      {
        name: "salary",
        message: "Enter the salary...",
        type: "input",
      },
      {
        name: "department",
        message: "Choose the department",
        type: "list",
        choices: currentDepartments,
      },
    ])
    .then(async (answer) => {
      let department_id;

      await db
        .promise()
        .query(`SELECT id FROM departments WHERE name = "${answer.department}"`)
        .then((row) => (department_id = row[0][0].id));

      await db.promise().query(
        `
        INSERT INTO roles (title, salary, department_id)
        VALUES 
        ('${answer.title}', '${answer.salary}', ${department_id})
        `
      );
    });
};

module.exports = {
  viewRoles,
  addRole,
};
