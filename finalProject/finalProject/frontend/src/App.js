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
  const [nt, setNt] = useState(null);
  const [st, setSt] = useState(null);
  const [mt, setMt] = useState(null);

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
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (z.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    } else {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        // z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
  };

  const advancedquery1CRUD = () => {
    console.log("Running advanced query 1")
    Axios.get('http://localhost:3002/api/advq1').then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (y.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    } else {
        w.style.display = "none";
        x.style.display = "none";
        // y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
  };

  const advancedquery2CRUD = () => {
    console.log("Running advanced query 2")
    Axios.get('http://localhost:3002/api/advq2').then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (x.style.display === "none") {
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    } else {
        w.style.display = "none";
        // x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
  };

  const advancedquery3CRUD = () => {
    console.log("Running advanced query 3")
    Axios.get('http://localhost:3002/api/advq3').then((response) => {
      setSearch(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (w.style.display === "none") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";

    } else {
        // w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }
  };

  const intermediatenewtable = () => {
    console.log("Getting intermediate NewTable")
    Axios.get('http://localhost:3002/api/newtable').then((response) => {
      setNt(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (c.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "block";

    } else {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
    }

  }

  const intermediatesoytable = () => {
    console.log("Getting intermediate SoyTable")
    Axios.get('http://localhost:3002/api/soytable').then((response) => {
      console.log(response)
      console.log(response.data)
      setSt(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (a.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "none";

    } else {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
    }

  }
  const intermediatemilktable = () => {
    console.log("Getting intermediate MilkTable")
    Axios.get('http://localhost:3002/api/milktable').then((response) => {
      setMt(response.data)
      console.log(search)
    })
    var w = document.getElementById("aq3Div");
    var x = document.getElementById("aq2Div");
    var y = document.getElementById("aq1Div");
    var z = document.getElementById("searchDiv");
    var a = document.getElementById("soyDiv");
    var b = document.getElementById("milkDiv");
    var c = document.getElementById("newTableDiv");
    if (b.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";

    } else {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        c.style.display = "none";
    }

  }


  const divStyle = {
    margin: '50px',
    border: '20px solidblack',
    fontFamily: 'verdana',
    textAlign: 'center'
  };

  return (
    <div className = "App">
      <body style={divStyle}>
        <div style = {divStyle}>

          <h1>Peanut Table</h1>
        </div>
      </body>

      {/* <h1>CRUD Applications</h1> */}
      <div style = {divStyle}>
        <h1>Insert and Delete Restaurant Name and Location</h1>

        <div className = "Form">
          <label>Restaurant Name:</label>

          <input type = "text" name = " restaurantName " onChange={(e) => {
            setrestaurantName(e.target.value);
          } } />

          <label>Restaurant Location:</label>
          <input type = "text" name = " restaurantLocation " onChange={(e) => {
            setrestaurantLocation(e.target.value);
          } }/><br></br><br></br>
          <button onClick={insertCRUD}>INSERT</button>
          <button onClick={deleteCRUD}>DELETE</button>
        </div>
      </div>
      {/* <a href="/Insert/">Insert</a> */}

      <div style={divStyle}>
        <h1> Update Restaurant Name and Location</h1>
        <label>Target Restaurant Name:</label>

        <input type = "text" name = "targetName" onChange={(e) => {
          settargetName(e.target.value);
        } } />

        <label>Target Restaurant Location:</label>
        <input type = "text" name = "targetLocation" onChange={(e) => {
          settargetLocation(e.target.value);
        } }/><br></br><br></br>

        <label>New Restaurant Name:</label>

        <input type = "text" name = "newName" onChange={(e) => {
          setnewName(e.target.value);
        } } />

        <label>New Restaurant Location:</label>
        <input type = "text" name = "newLocation" onChange={(e) => {
          setnewLocation(e.target.value);
        } }/><br></br><br></br>
        <button onClick = {putCRUD}>PUT</button>
      </div>

      <div style = {divStyle}>
        <h1>Advanced query buttons below</h1>
        <button onClick = {advancedquery1CRUD}>Advanced Query 1</button><br></br>
        <button onClick = {advancedquery2CRUD}>Advanced Query 2</button><br></br>
        <button onClick = {advancedquery3CRUD}>Advanced Query 3</button><br></br><br></br>
        <button onClick = {intermediatenewtable}>Intermediate NewTable</button>
        <button onClick = {intermediatesoytable}>Intermediate SoyTable</button>
        <button onClick = {intermediatemilktable}>Intermediate MilkTable</button>

      </div>

      <div style = {divStyle}>
        <h1> Search by Restaurant Name</h1>
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
        <div id="aq3Div">
        {search && search.map((tuples, index) => (
          <div key = {index}>
           <p>Restaurant Name: {tuples.RestaurantName}</p>
           </div>
        ))}

        </div>
        <div id="newTableDiv">
        {nt && nt.map((tuples, index) => (
          <div key = {index}>
           <p>Restaurant Name: {tuples.RestaurantName}</p>
           </div>
        ))}

        </div>
        <div id="soyDiv">
        {st && st.map((tuples, index) => (
          <div key = {index}>
           <p>Food Name: {tuples.FoodName}</p>
           </div>
        ))}

        </div>
        <div id="milkDiv">
        {mt && mt.map((tuples, index) => (
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
