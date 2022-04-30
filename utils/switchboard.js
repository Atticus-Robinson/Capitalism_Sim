const start = require("../lib/questions");
const inquirer = require("inquirer");

//Functions
const viewDepartments = require("../lib/deparment");
// const {} = require("../lib/employee");
// const {} = require("../lib/role");

const switchboard = async (choice) => {
  switch (choice) {
    case "Exit":
      exit();
      break;
    case "View all departments":
      await viewDepartments();
      break;
    default:
      exit();
      break;
  }
  // await again();
};

module.exports = switchboard;
