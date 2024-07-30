import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/Navigation.css';

function Navigation() {
    return (
      <nav style={{ display: 'flex', backgroundColor: '#333', padding: '10px 0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', flex: 1 }}>     
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>About</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
          <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <Link to="/signup" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faUserPlus} /> Sign Up
          </Link>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>
            <FontAwesomeIcon icon={faSignInAlt} /> Log In
          </Link>
        </div>
      </nav>
    );
}

export default Navigation;
