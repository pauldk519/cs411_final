const express = require("express");
const app = express();
const mysql = require("mysql");

var db = mysql.createConnection({
    host: '34.71.243.56',   //This is the IP address for the GCP database, change to 'localhost' for local testing.
    user: 'root',
    password: '12345',
    database: 'app',
})

app.get('/', (require, response) => {
    const sqlInsert = "INSERT INTO 'Food' ('foodName', 'restaurantName') VALUES ('newFood', 'Somewhere');";
    db.query(sqlInsert, (err, result) => {
        response.send("Insertion into table failed");
    })
})

app.listen(3002, () => {
    console.log("running on port 3002");
})