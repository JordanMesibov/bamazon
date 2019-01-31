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
    ]).then(
      transactionAttempt = () => {
 
      /* (aa) before (A), create a variable to store vital info
        const chosenProduct = {
          id: productId.input,
          howMany: productQuantity.input
        }
      */
      // (aa)
      

      // (A) first, check to see if the productQuantity.input is greater than the stock_quantity from the products TABLE
      //----if there isn't enough supply, console.log("Sorry, bamazon does not currently have enough of that item to fill your order.") and prevent the sale from occuring!!!!
      //----------------------------------------------------
      // (A)
        // if (err) throw err;
        
        let chosenProduct = {
          id: productId.input,
          howMany: productQuantity.input
        }
        console.log("Chosen Product ID: " + chosenProduct.id);
        console.log("Chosen amount: " + chosenProduct.howMany);
      
      //----------------------------------------------------

      // (B) then, console log what the user has selected to perform, and give them a total price for the transaction((parseInt(price) * productQuantity.input)
      //----------------------------------------------------
      // (B)


      //----------------------------------------------------
      // (C) then, update the products table to reflect the new product inventory (subtract the productQuantity.input from the stock_quantity of that specific item.)
      //----------------------------------------------------
      // (C)


      //----------------------------------------------------
      // (D) finally, provide the user with a console.log("Congratulations! Your order was successful. We hope you had a pleasant experience with bamazon. Have a wonderful day!");
      //----------------------------------------------------
      // (D)


      //----------------------------------------------------
    //close the curly bracket of transactionAtempt arrow function below this line.
    }
    )
}