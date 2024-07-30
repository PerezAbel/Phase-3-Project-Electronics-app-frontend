import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-start', backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
      <Link to="/shopall" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Shop All</Link>
      <Link to="/computerslaptops" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Computers & Laptops</Link>
      <Link to="/tablets" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Tablets</Link>
      <Link to="/dronescameras" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Drones & Cameras</Link>
      <Link to="/audio" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Audio</Link> 
      <Link to="/mobile" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Mobile</Link>
      <Link to="/tvhome" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>TV & Home Cinema</Link>
      <Link to="/wearbletech" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Wearable Tech</Link>
    </nav>
  );
}

export default NavBar;
