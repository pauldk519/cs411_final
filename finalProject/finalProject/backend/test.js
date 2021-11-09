const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var db = mysql.createConnection({
    host: '34.71.243.56',   //This is the IP address for the GCP database, change to 'localhost' for local testing.
    user: 'root',
    password: '12345',
    database: 'app',
});

const sqlInsert = "SELECT * FROM `Restaurant`;";
db.query(sqlInsert, (err, result) => {

    console.log(err);
    console.log(result);
});
