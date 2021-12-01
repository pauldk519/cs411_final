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

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.post('/api/insert', (require, response) => {
  const restaurantLocation  = require.body.restaurantLocation;
  const restaurantName = require.body.restaurantName;
    const sqlInsert = "INSERT INTO `Restaurant` (`RestaurantName`, `RestaurantLocation`) VALUES (?, ?);";
    db.query(sqlInsert, [restaurantName, restaurantLocation] ,(err, result) => {
        console.log(err);
        console.log(result);
    })
})

app.delete("/api/delete/:restaurantName&:restaurantLocation", (require, response) => {
    const restaurantLocation  = require.params.restaurantLocation;
    const restaurantName = require.params.restaurantName;

    const sqlDelete = "DELETE FROM `Restaurant` WHERE `RestaurantName`= ? AND `RestaurantLocation` = ?;";
    db.query(sqlDelete, [restaurantName, restaurantLocation], (err, result) => {
      console.log(require.params.restaurantName);
        if (err)
          console.log(error);
        console.log(result);
    })
});

app.put('/api/update/:restaurantName&:restaurantLocation', (require, response) => {
  const restaurantLocation  = require.params.restaurantLocation;
  const restaurantName = require.params.restaurantName;

  const newRestaurantLocation  = require.body.restaurantLocation;
  const newRestaurantName = require.body.restaurantName;
    const sqlInsert = "UPDATE `Restaurant` SET `RestaurantName` = ?, `RestaurantLocation` = ? WHERE `RestaurantName` = ? AND `RestaurantLocation` = ?;";
    db.query(sqlInsert, [newRestaurantName, newRestaurantLocation,restaurantName, restaurantLocation] ,(err, result) => {
        console.log(newRestaurantName, newRestaurantLocation,restaurantName, restaurantLocation);

        console.log(err);
        console.log(result);
    })
})

app.get("/api/search/:query", (require, response) => {
  const newRestaurantName = require.params.query;
  console.log(newRestaurantName)
    const sqlSelect = "SELECT * FROM `Restaurant` WHERE `RestaurantName` = ?;";
    db.query(sqlSelect, newRestaurantName ,(err, result) => {
        console.log(result)
        console.log(newRestaurantName)
        response.send(result);
    });
});

app.get("/api/advq1", (require, response) => {

  const sqlSelect = `SELECT *
  FROM Food NATURAL JOIN Contains NATURAL JOIN Ingredient NATURAL JOIN IsAllergen
  WHERE Price < (SELECT AVG(Price) FROM Food WHERE RestaurantName = "McDonald's" GROUP BY RestaurantName)
  AND (NOT AllergenName = "milk" )
  ORDER BY Price ASC
  LIMIT 15;`;
  db.query(sqlSelect, (err, result) => {
      response.send(result);
  });
});

app.get("/api/advq2", (require, response) => {

  const sqlSelect = `SELECT FoodName
  FROM Food
  NATURAL JOIN Ingredient
  NATURAL JOIN IsAllergen
  NATURAL JOIN Contains
  WHERE RestaurantName LIKE "%burger%"
  AND AllergenName = "soy"
  AND Price IN (SELECT MAX(f.Price) FROM Food f GROUP BY RestaurantName)
  ORDER BY Price DESC
  LIMIT 15;`;
  db.query(sqlSelect, (err, result) => {
      response.send(result);
  });
});

app.get("/api/advq3", (require, response) => {

  const sqlSelect = `SELECT DISTINCT RestaurantName FROM Restaurant
    WHERE RestaurantName NOT IN 
    (SELECT RestaurantName FROM Restaurant NATURAL JOIN Food NATURAL JOIN Contains NATURAL JOIN IsAllergen);`;
  db.query(sqlSelect, (err, result) => {
      response.send(result);
  });
});

app.listen(3002, () => {
    console.log("running on port 3002");
})
