// import all dependencies first
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// then, set up the database config
const db = mysql.createConnection({host: "localhost", port: 3306, user: "root", password: "admin", database: "bamazon_DB"});

// establish connection to the bamazon_DB database
db.connect(err => {
  if (err) {
    throw err;
  }

  console.log("You are connected to the database.");

  // immediately redirect the user to start() (the beginning of the inquirer prompt)
  start();
});

