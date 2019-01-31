USE bamazon_db;

INSERT INTO products
  (product_name, department_name, price, stock_quantity)
VALUES
  ("The Name of the Wind", "Books", 15.99, 100),
  ("The Wise Man's Fear", "Books", 15.99, 75),
  ("A Closed and Common Orbit", "Books", 9.99, 50),
  ("Thrawn (Star Wars)", "Books", 12.99, 100),
  ("Guitar", "Musical Instruments", 300.00, 10),
  ("Keyboard", "Musical Instruments", 250.00, 5),
  ("Glockenspiel", "Musical Instruments", 99.99, 2),
  ("Trombone", "Musical Instruments", 249.99, 3),
  ("Destiny 2", "Video Games", 59.99, 40),
  ("Megaman Battle Network 2", "Video Games", 9.99, 5);

SELECT * FROM products;