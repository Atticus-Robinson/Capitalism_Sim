const inquirer = require("inquirer");
const switchboard = require("./switchboard");
const { viewDepartments } = require("./manip");


function initialQ() {
    inquirer
    .prompt([
      {
        name: "initialQ",
        message: "What would you like to do...",
        type: "list",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "View employees by manager",
          "View employees by department",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update and employee role",
          "Update employee manager",
          "Delete a department",
          "Delete a role",
          "Delete an employee",
        ],
      },
    ])
    .then((answer) => {
        switchboard(answer.initialQ);
    })
    .catch((error) => {
        console.log(error);
    });
}

module.exports = initialQ;