const inquirer = require("inquirer");
const db = require("../db/connection");
const cTable = require("console.table");
const { Department, Role, Employee } = require("../utils/constructors");

const viewDepartments = async () => {
  let sql = `SELECT
            id,
            name AS Department
            FROM departments
            `;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

const addDepartment = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "Enter the name of the department...",
      },
    ])
    .then(async (answer) => {
      await db.promise().query(
        `
      INSERT INTO departments (name)
      VALUES ('${answer.addDepartment}')
      `
      );
    });
};

module.exports = {
  viewDepartments,
  addDepartment,
};
