var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hippo91^",
    database: "bamazon"
});

// connection.connect(function (err) {
//     if (err) throw (err);
//     console.log("connected");
// });




function start() {
    console.log("Showing all products...\n");
    var query = connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw (err);
        console.log(res);

    })
}


function purchasePrompt() {
    inquirer.prompt([{
                type: "input",
                name: "item_id",
                message: "Type in the item ID of the product you wish to buy."
            },
            {
                type: "input",
                name: "quantity",
                message: "How many units of this product do you wish to buy?"
            }
        ])
        .then(function (inquirerRes) {
            purchaseItems(inquirerRes.item_id, inquirerRes.quantity);
        });

    function purchaseItems(id, quantity) {
        connection.query(
            "SELECT * FROM products WHERE item_id = ?",
            id,
            function (err, res) {
                var cost = res[0].price * quantity;
                if (err) throw (err);
                if (quantity <= res[0].stock_quantity) {
                    console.log("yeah it's here. you asked for " + quantity + " " + res[0].product_name + " and we have " + res[0].stock_quantity + " of those. so that'll be $" +
                        cost + ".");
                    var newstock_quantity = res[0].stock_quantity - quantity;
                    console.log("There's now " + newstock_quantity + " left.");

                    connection.query("UPDATE products SET ? WHERE ?",
                        [{
                                stock_quantity: newstock_quantity
                            },
                            {
                                item_id: id

                            }
                        ],
                        function (err, res) {
                            if (err) throw (err);

                        }

                    )
                } else {
                    console.log("we don't have enough, sorry. choose another item.");
                    purchasePrompt();
                }
            })

        purchasePrompt();
    }

    // console.log(query.sql);
}

start();
purchasePrompt();