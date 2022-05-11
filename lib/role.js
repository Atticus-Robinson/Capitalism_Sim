const inquirer = require("inquirer");
const db = require("../db/connection");
const { Department, Role, Employee } = require("../utils/constructors");

const viewRoles = async () => {
  let sql = `SELECT * FROM roles`;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
};

const addRole = async (text) => {
  let roleName = text;

  let sql = `INSERT INTO roles (title, salary, department_id)
            VALUES
            ('${departmentName}');
            `;
  await db
    .promise()
    .query(sql)
    .then((rows) => console.table(rows[0]));
}



const addRoleAsk = async () => {
  await inquirer
    .prompt(addRoleQ)
    .then(async (answer) => {
      await addDepartment(answer.addRoleQ);
      again();
    })
    .catch((error) => {
      console.log(error);
    });
};
const addRoleQ = async () => {
  let currentDepartments;
  await db
    .promise()
    .query(`SELECT departments.name FROM departments`)
    .then(([rows]) => (currentDepartments = rows.map((row) => row.name)))
    .catch((err) => console.log(err));
  [
    {
      name: "addRoleQ",
      message: "Enter the role you would like to add...",
      type: "input",
    },
    {
      name: "addSalaryQ",
      message: "Enter the salary...",
      type: "input",
    },
    {
      name: "addDepartmentQ",
      message: "Choose the department",
      type: "list",
      choices: currentDepartments,
    },
  ];
};

module.exports = {
  viewRoles,
  addRole
}