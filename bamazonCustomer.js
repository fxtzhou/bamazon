var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Hippo91^",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("connected");
});

function start() {
    console.log("Showing all products...\n");
    var query = connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw (err);
        console.log(res);
        // connection.end();
    })
}

function purchasePrompt() {
    inquirer.prompt([{
                type: "input",
                name: "id",
                message: "Type in the item ID of the product you wish to buy."
            },
            {
                type: "input",
                name: "quantity",
                message: "How many units of this product do you wish to buy?"
            }
        ])
        .then(function (inquirerRes) {
            purchaseItems(inquirerRes.id, inquirerRes.quantity);
        })

    function purchaseItems(id, quantity) {
        connection.query(
            "SELECT * FROM products WHERE item_id = ?",
            id,
            function (err, res) {
                var cost = res[0].price * quantity;
                if (err) throw (err);
                if (quantity < res[0].stock_quantity) {
                    console.log("yeah it's here, that'll be " +
                        cost);
                } else {
                    console.log("we don't sell ugly popcorn");
                }
            }


        );
        // console.log(query.sql);
    }

}
start();
purchasePrompt();