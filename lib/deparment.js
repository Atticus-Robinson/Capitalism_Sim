const inquirer = require("inquirer");
const db = require("../db/connection");


function viewDepartments() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    return rows;
  });
}
