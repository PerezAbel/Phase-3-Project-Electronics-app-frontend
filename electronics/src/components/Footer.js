import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
 

import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="column">
                <h3>About Us</h3>
                <p>We are a leading tech company specializing in providing innovative solutions for everyday needs.</p>
            </div>
            <div className="column">
                <h3>Social Media</h3>
                <ul className="social-media-list">
                    <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
            </div>
            <div className="column">
                <h3>Contact Us</h3>
                <p>Email: info@techcompany.com</p>
                <p>Phone: +1234567890</p>
            </div>
           
                
           
        </footer>
    );
}

export default Footer;
