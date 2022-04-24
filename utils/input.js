const inquirer = require("inquirer");
const switchboard = require("./switchboard");
const firstQ = require("../lib/questions");


function initialQ() {
    inquirer
    .prompt(firstQ
    )
    .then((answer) => {
        switchboard(answer.initialQ);
        initialQ();
    })
    .catch((error) => {
        console.log(error);
    });
}

module.exports = initialQ;