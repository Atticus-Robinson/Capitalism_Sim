const inquirer = require("inquirer");
const db = require("../db/connection");
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

const addDepartment = async (text) => {
  let departmentName = text;

  let sql = `INSERT INTO departments (name)
            VALUES
            ('${departmentName}');
            `;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
}

module.exports = {
  viewDepartments,
  addDepartment
};
