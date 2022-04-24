const { viewDepartments, viewRoles, viewEmployees } = require("./manip");

function switchboard(choice) {
  switch (choice) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "View employees by manager":
      break;
    case "View employees by department":
      break;
    case "Add a department":
      break;
    case "Add a role":
      break;
    case "Add an employee":
      break;
    case "Update and employee role":
      break;
    case "Update employee manager":
      break;
    case "Delete a department":
      break;
    case "Delete a role":
      break;
    case "Delete and employee":
      break;
    default:
      break;
  }
}

module.exports = switchboard;
