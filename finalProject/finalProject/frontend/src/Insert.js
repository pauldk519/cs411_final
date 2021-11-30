import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';



function Insert() {
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

  return(

    <!DOCTYPE html>

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
    </div>
    
    </html>
  )
}

export default Insert;