const db = require("../db/connection");
const inquirer = require("inquirer");

//SQL Functions
const { viewDepartments, addDepartment } = require("../lib/deparment");
const {
  viewEmployees,
  addEmployee,
  updateEmployee,
} = require("../lib/employee");
const { viewRoles, addRole } = require("../lib/role");
const { init } = require("express/lib/application");

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
    "Update an employee role",
    "Exit",
  ],
};

const again = async () => {
  initiateProgram();
};

const exit = () => {
  db.end();
  process.exit(1);
}
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
    case "Add a department":
      await addDepartment();
      break;
    case "Add a role":
      await addRole();
      break;
    case "Add an employee":
      await addEmployee();
      break;
    case "Update an employee role":
      await updateEmployee();
    default:
      exit();
      break;
  }
};

module.exports = {
  initiateProgram,
  again,
};
