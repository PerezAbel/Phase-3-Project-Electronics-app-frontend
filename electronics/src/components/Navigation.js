import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/Navigation.css';

function Navbar() {
    return (
        <ul className="navbar">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#services">Services</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li className="nav-item"><a href="#cart"><FontAwesomeIcon icon={faShoppingCart} /> Cart</a></li>
            <li className="nav-item"><a href="#signup"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</a></li>
            <li className="nav-item"><a href="#login"><FontAwesomeIcon icon={faSignInAlt} /> Log In</a></li>
        </ul>
    );
}

export default Navbar;
