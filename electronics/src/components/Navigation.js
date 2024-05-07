import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/Navigation.css';

function Navbar() {
    return (
        <ul className="navbar">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/services">Services</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
            <li className="nav-item"><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</Link></li>
            <li className="nav-item"><Link to="/signup"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link></li>
            <li className="nav-item"><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} /> Log In</Link></li>
        </ul>
    );
}

export default Navbar;
