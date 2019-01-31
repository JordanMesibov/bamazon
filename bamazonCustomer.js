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

const start = () => {
  db.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Welcome to bamazon! We have the following inventory:\n");
    console.log(res);
    firstPrompt();
  });
}
const firstPrompt = () => {
  inquirer
    .prompt([
      {
        name: "productId",
        message: "What is the ID of the product you are interested in purchasing?",
        type: "input",
        default: 1
      },
      {
        name: "productQuantity",
        message: "How many units of the product would you like to purchase?",
        type: "input",
        default: 1,
        validate: function (input) {
          return !isNaN(input);
        },
        filter: function (input) {
          return parseInt(input);
        }
      }
    ]).then()
}