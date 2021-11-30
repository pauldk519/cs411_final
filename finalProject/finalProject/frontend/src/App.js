import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';



function App() {
  const [restaurantName, setrestaurantName] = useState('');
  const [restaurantLocation, setrestaurantLocation] = useState('');
  const [advqR, setadvqR] = useState([]);
  const [targetName, settargetName] = useState('');
  const [targetLocation, settargetLocation] = useState('');
  const [newName, setnewName] = useState('');
  const [newLocation, setnewLocation] = useState('');
  const [search, setSearch] = useState(null);
  const [query, setquery] = useState('');
  const [restName, setrestName] = useState('');
  const [restLoc, setrestLoc] = useState('');
  const [allergenName, setallergenName] = useState('');
  const [allergey, setallergy] = useState('');
  const [calories, setcalories] = useState('');
  const [foodName, setfoodName] = useState('');
  const [ingredientName, setingredientName] = useState('');
  const [price, setprice] = useState('');

  const insertCRUD = () => {
     Axios.post('http://localhost:3002/api/insert', {
     restaurantName: restaurantName,
     restaurantLocation: restaurantLocation
     }).then(() => {
     alert('success insert')
   })

   };

   const deleteCRUD = () => {
    Axios.delete(`http://localhost:3002/api/delete/${restaurantName}&${restaurantLocation}`)
  };

  const putCRUD = () => {
    Axios.put(`http://localhost:3002/api/update/${targetName}&${targetLocation}`, {
      restaurantName: newName,
      restaurantLocation: newLocation
    });
  };

  const searchCRUD = () => {
    console.log(query)
    Axios.get(`http://localhost:3002/api/search/${query}`).then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
        // z.style.display = "none";
    }
  };

  const advancedquery1CRUD = () => {
    console.log("Running advanced query 1")
    Axios.get('http://localhost:3002/api/advq1').then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.style.display = "none";
        // y.style.display = "none";
        z.style.display = "none";
    }
  };

  const advancedquery2CRUD = () => {
    console.log("Running advanced query 2")
    Axios.get('http://localhost:3002/api/advq2').then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        // x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
    }
  };



  return (
    <div className = "App">
      <h1>CRUD Applications</h1>
      <h1>INSERT and DELETE below</h1>

      <div className = "Form">
        <label>Restaurant Name:</label>

        <input type = "text" name = "restaurantName" onChange={(e) => {
          setrestaurantName(e.target.value);
        } } />

        <label>Restaurant Location:</label>
        <input type = "text" name = "restaurantLocation" onChange={(e) => {
          setrestaurantLocation(e.target.value);
        } }/>
        <button onClick={insertCRUD}>INSERT</button>
        <button onClick={deleteCRUD}>DELETE</button>
      </div>

      {/* <a href="/Insert/">Insert</a> */}

      <div>
        <h1> UPDATE fields below</h1>
        <label>Target Restaurant Name:</label>

        <input type = "text" name = "targetName" onChange={(e) => {
          settargetName(e.target.value);
        } } /><br></br>

        <label>Target Restaurant Location:</label>
        <input type = "text" name = "targetLocation" onChange={(e) => {
          settargetLocation(e.target.value);
        } }/><br></br>

        <label>New Restaurant Name:</label>

        <input type = "text" name = "newName" onChange={(e) => {
          setnewName(e.target.value);
        } } /><br></br>

        <label>New Restaurant Location:</label>
        <input type = "text" name = "newLocation" onChange={(e) => {
          setnewLocation(e.target.value);
        } }/><br></br>
        <button onClick = {putCRUD}>PUT</button>
      </div>

      <div>
        <h1>Advanced query buttons below</h1>
        <button onClick = {advancedquery1CRUD}>advanced query1</button>
        <button onClick = {advancedquery2CRUD}>advanced query2</button>
      </div>

      <div>
        <h1> SEARCH fields below </h1>
        <label>Restaurant Name to search by:</label>
        <input type = "text" name = "query" onChange={(e) => {
          setquery(e.target.value);
        } }/><br></br>
        <button onClick={searchCRUD}>SEARCH</button>
        <div id="searchDiv">
        {search && search.map((tuples, index) => (
          <div key = {index}>
           <p>Restaurant Name: {tuples.RestaurantName}</p>
           <p>Restaurant Location: {tuples.RestaurantLocation}</p>
           </div>
        ))}
        </div>
        <div id="aq1Div">
        {search && search.map((tuples, index) => (
           <div key = {index}>
           <p>Allergen Name: {tuples.AllergenName}</p>
           <p>Allergy: {tuples.Allergy}</p>
           <p>Calories: {tuples.Calories}</p>
           <p>Food Name: {tuples.FoodName}</p>
           <p>Ingredient Name: {tuples.IngredientName}</p>
           <p>Price: {tuples.Price}</p>
           <p>Restaurant Name: {tuples.RestaurantName}</p>
           <p>Restaurant Location: {tuples.RestaurantLocation}</p>
           </div>
        ))}
        </div>
        <div id="aq2Div">
        {search && search.map((tuples, index) => (
          <div key = {index}>
           <p>Food Name: {tuples.FoodName}</p>
           </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
