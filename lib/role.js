const inquirer = require("inquirer");
const db = require("../db/connection");


function viewRoles() {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    console.table(rows);
  });
}
