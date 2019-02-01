// import all dependencies first
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

// then, set up the database config
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "bamazon_DB"
});

// establish connection to the bamazon_DB database
db.connect(err => {
  if (err) {
    throw err;
  }

  console.log("You are connected to the database.");

  // immediately redirect the user to start() (the beginning of the inquirer prompt)
  start();
});

// declare a variable onject to hold user response values
let bag = {
  itemId: 0,
  product: "",
  total: 0,
  quantity: 0,
  unitprice: 0,
  stockQuantity: 0,
  updatedStockQuantity: 0
};

const start = () => {
  db.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("Welcome to bamazon! We have the following inventory:\n");
    console.table(res);
    firstPrompt(res);
  });
}
const firstPrompt = (dbProducts) => {
  inquirer
    .prompt([{
        name: "productId",
        message: "What is the ID of the product you are interested in purchasing?",
        type: "input",
        default: 1,
        filter: function (input) {
          return parseInt(input);
        }
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
      function (response) {
        // console.log("Chosen Product ID: " + response.productId);
        // console.log("Chosen amount: " + response.productQuantity);
        bag.itemId = response.productId;
        bag.quantity = response.productQuantity;
        console.log(bag);

        // grab the MySQL product and update its inventory.
        matchProduct();
      }
    )
}
function matchProduct() {
  console.log("we out here");
  db.query("SELECT * FROM products WHERE ")
}


// (A) first, check to see if the productQuantity.input is greater than the stock_quantity from the products TABLE
//----if there isn't enough supply, console.log("Sorry, bamazon does not currently have enough of that item to fill your order.") and prevent the sale from occuring!!!!
//----------------------------------------------------
// (A)
// if (err) throw err;

// let chosenProduct = {
//   id: productId.input,
//   howMany: productQuantity.input
// find what product you are looking to purchase
// const productPicked = dbProducts.find(product => item_id === userPick.productId);
// console.log(productPicked);

// // if userPick.productQuantity is greater than productPicked's quantity in stock, then don't let user purchase
// if (userPick.productQuanity > productPicked) {
//   console.log("Sorry, bamazon does not have enough of that product in stock to fill your order! Try a smaller quantity or a different product.");
//   return false;
// }
// // else let user purchase, update the product to have a stock quantity of the current quantity - userPick.productQuantity
// else {

//   dbProducts.query(`UPDATE products SET stock_quantity = ${stock_quantity - productQuantity.input} WHERE item_id = ${userPick.productId}`);
// }
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