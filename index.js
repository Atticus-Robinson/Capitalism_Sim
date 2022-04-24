const express = require("express");
const inquirer = require("inquirer");
const { Department, Role, Employee } = require("./utils/constructors.js");
const { viewDepartments, viewRoles, viewEmployees } = require("./utils/manip");

viewDepartments();