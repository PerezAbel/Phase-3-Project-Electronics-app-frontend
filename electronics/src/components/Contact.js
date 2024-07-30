import React from 'react';
import '../css/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Email: support@techx.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Tech X Street, Tech City, TX 12345</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
