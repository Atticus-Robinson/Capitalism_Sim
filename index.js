const express = require("express");
const { Department, Role, Employee } = require("./utils/constructors.js");

const jim  = new Employee('Jim', 'Henson', 2, 2);

console.log(jim);