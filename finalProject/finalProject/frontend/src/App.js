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

      <h1>Advanced query buttons below</h1>
      <button>advanced query1</button>
      <button>advanced query2</button>

      <div>
        <h1> SEARCH fields below </h1>
        <label>Restaurant Name to search by:</label>
        <input type = "text" name = "query" onChange={(e) => {
          setquery(e.target.value);
        } }/><br></br>
        <button onClick={searchCRUD}>SEARCH</button>

        {search && search.map((tuples, index) => (
          <div key = {index}>
           <p>Restaurant Name: {tuples.RestaurantName}</p>
           <p>Restaurant Location: {tuples.RestaurantLocation}</p>
           </div>
        ))}
      </div>
    </div>
  );
}

export default App;
