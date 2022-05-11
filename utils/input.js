const db = require("../db/connection");
const inquirer = require("inquirer");

//SQL Functions
const { viewDepartments, addDepartment } = require("../lib/deparment");
const { viewEmployees, viewByManager } = require("../lib/employee");
const { viewRoles, addRole } = require("../lib/role");

const initiateProgram = async () => {
  inquirer
    .prompt(start)
    .then(async (answer) => {
      await switchboard(answer.start);
      again();
    })
    .catch((error) => {
      console.log(error);
    });
};
const start = {
  name: "start",
  message: "What would you like to do...",
  type: "list",
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update and employee role",
    "Exit",
  ],
};

const again = async () => {
  initiateProgram();
};

const switchboard = async (choice) => {
  switch (choice) {
    case "Exit":
      exit();
      break;
    case "View all departments":
      await viewDepartments();
      break;
    case "View all roles":
      await viewRoles();
      break;
    case "View all employees":
      await viewEmployees();
      break;
    case "View employees by manager":
      await viewByManager();
      break;
    case "Add a department":
      await addDepartmentAsk();
      break;
    case "Add a role":
      await addRoleAsk();
      break;
    default:
      exit();
      break;
  }
};

const addDepartmentQ = {
  name: "addDepartmentQ",
  message: "Enter the department you would like to add...",
  type: "input",
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
  initiateProgram,
  again,
  addDepartmentAsk,
};
