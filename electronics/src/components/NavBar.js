import React from 'react';   
import { Link } from 'react-router-dom';  
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Shop All</Link>
      <Link to="/signup">Computers & Laptops</Link>
      <Link to="/cart">Tablets</Link>
      <Link to="/selldevice">Drones & Cameras</Link> 
      <Link to="/categories">Audio</Link>
      <Link to="/signup">Mobile</Link>
      <Link to="/cart">TV & Home Cinema</Link>
      <Link to="/selldevice">Wearable Tech</Link>
      <Link to="/selldevice">Sale</Link>
      
    </nav>
  );
}


export default NavBar;