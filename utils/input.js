//Question library
const start = require("../lib/questions");

//Switchborad util
const switchboard = require("./switchboard");

const inquirer = require("inquirer");
const db = require("../db/connection");

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

const again = async () => {
 initiateProgram();
};

function exit() {
  console.log("exit");
}

module.exports = {
  initiateProgram,
  again,
};
