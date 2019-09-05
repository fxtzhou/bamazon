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
    var query = connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw (err);
        console.log(res);
        connection.end();
    })
}

start();