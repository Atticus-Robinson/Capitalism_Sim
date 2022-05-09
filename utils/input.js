//Question library
const { start, addDepartmentQ, addRoleQ } = require("../lib/questions");

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

const addDepartmentAsk = async () => {
  await inquirer
    .prompt(addDepartmentQ)
    .then(async (answer) => {
      await addDepartment(answer.addDepartmentQ);
      again();
    })
    .catch((error) => {
      console.log(error);
    });
};

const addRoleAsk = async () => {
  let currentDepartments = getAllDepartments();
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

module.exports = {
  initiateProgram,
  again,
  addDepartmentAsk,
};
