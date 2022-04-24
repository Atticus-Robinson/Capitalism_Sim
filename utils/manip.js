//Used for SQL manipulation
const db = require("../db/connection");

module.exports = {
  viewDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  },

  viewRoles() {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  },

  viewEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  },
};
