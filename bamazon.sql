DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,4) NULL,
stock_quantity INT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Nintendo Switch", "Electronics", 299.99, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Collection of Mana - Nintendo Switch", "Video Games", 33.84, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Star Wars: Galaxy's Edge A Crash of Fate", "Books", 12.39, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Amazon Essentials Men's Athletic-Fit Stretch Jean", "Men's Clothing", 34.10, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Xbox One X 1TB Console - Gears 5 Limited Edition Bundle", "Electronics", 499.00, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "
VHT BCL0125 Clear Exact-Match Automotive Top Coat", "Automotive", 9.81, 18);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Tide Pods", "Household", 9.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Charmin Ultra Soft Toilet Paper", "Household", 14.99, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Creatine", "Health", 39.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Advil Liquid Gels 800mg", "Health", 7.99, 100);
