const start = require("../lib/questions");
const inquirer = require("inquirer");

//Functions
const { viewDepartments } = require("../lib/deparment");
const { viewEmployees, viewByManager } = require("../lib/employee");
const { viewRoles } = require("../lib/role");

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
    default:
      exit();
      break;
  }
};

module.exports = switchboard;
