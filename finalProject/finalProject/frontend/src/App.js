import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  return (
    <div className = "App">
      <h1>CRUD Applications</h1>

      <div className = "Form">
        <label>Restaurant Name:</label>
        <input type = "text" name = "restaurantName" />

        <label>Food Name:</label>
        <input type = "text" name = "foodName" />

        <button>Submit</button>

      </div>
    </div>
  );
}

export default App;
