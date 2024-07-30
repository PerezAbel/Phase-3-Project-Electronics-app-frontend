// src/components/About.js

import React from 'react';

const About = () => {
    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const contentStyle = {
        flex: '1 1 60%',
        padding: '20px',
    };

    const heading1Style = {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#333',
    };

    const heading2Style = {
        fontSize: '1.8em',
        marginBottom: '10px',
        color: '#333',
    };

    const paragraphStyle = {
        fontSize: '1.1em',
        lineHeight: '1.6',
        color: '#666',
        marginBottom: '20px',
    };

    const imageContainerStyle = {
        flex: '1 1 40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const imageStyle = {
        maxWidth: '100%',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={heading1Style}>About Tech X</h1>
                <p style={paragraphStyle}>
                    Welcome to Tech X, your number one source for all things electronics. We're dedicated to giving you the very best of tech products, with a focus on quality, customer service, and uniqueness.
                </p>
                <h2 style={heading2Style}>Our Mission</h2>
                <p style={paragraphStyle}>
                    Our mission is to provide the best electronic products to our customers, ensuring quality and affordability. We strive to offer exceptional customer service and create an easy and enjoyable shopping experience.
                </p>
                <h2 style={heading2Style}>Our Vision</h2>
                <p style={paragraphStyle}>
                    At Tech X, we envision a world where everyone has access to the latest and greatest technology. We aim to be a leader in the eCommerce space, continuously innovating and expanding our product range.
                </p>
                <h2 style={heading2Style}>Our History</h2>
                <p style={paragraphStyle}>
                    Founded in 2020 by tech enthusiasts John Doe and Jane Smith, Tech X has come a long way from its beginnings in a small office. When John and Jane first started out, their passion for cutting-edge electronics drove them to quit their day jobs, and gave them the impetus to turn hard work and inspiration into a booming online store.
                </p>
                <h2 style={heading2Style}>Meet Our Team</h2>
                <p style={paragraphStyle}>
                    We have a dynamic team of professionals who are passionate about technology and customer satisfaction. Our team includes experts in product sourcing, customer service, and technology, all working together to provide the best possible experience for our customers.
                </p>
                <h2 style={heading2Style}>Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions or comments, please don't hesitate to contact us. We're always here to help!
                </p>
            </div>
            <div style={imageContainerStyle}>
                <img
                    src="https://www.samkaytechcentre.com/slide-property/data/images/1.jpg"
                    alt="Tech X"
                    style={imageStyle}
                />
            </div>
        </div>
    );
};

export default About;
