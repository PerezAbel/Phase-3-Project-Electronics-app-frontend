import React from 'react';   
import { Link } from 'react-router-dom';  
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/selldevice">SellDevice</Link>
    </nav>
  );
}


export default NavBar;