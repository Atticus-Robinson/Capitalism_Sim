const inquirer = require("inquirer");
const db = require("../db/connection");


function viewEmployees() {
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}
