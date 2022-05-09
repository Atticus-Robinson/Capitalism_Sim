//Question Library

const start = {
  name: "start",
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
    "Exit",
  ],
};

const addDepartmentQ = {
  name: "addDepartmentQ",
  message: "Enter the department you would like to add...",
  type: "input",
};

var addRoleQ = [
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
    choices: [

    ]
  }
];

module.exports = { start, addDepartmentQ, addRoleQ };
