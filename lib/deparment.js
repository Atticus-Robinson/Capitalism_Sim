const inquirer = require("inquirer");
const db = require("../db/connection");
const { Department, Role, Employee } = require("../utils/constructors");

const viewDepartments = async () => {
  const sql = `SELECT * FROM department`;
  await db
  .promise()
  .query(sql).then((rows) => console.table(rows[0]));
};

module.exports = viewDepartments;
