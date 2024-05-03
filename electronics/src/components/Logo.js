import React from 'react';

function WordLogo() {
    const logoStyle = {
        fontFamily: 'Arial, sans-serif', // Use a suitable font
        fontSize: '36px', // Adjust size as needed
        color: '#333', // Adjust color as needed
        textTransform: 'uppercase', // Convert text to uppercase
        letterSpacing: '2px', // Adjust letter spacing as needed
        position: 'absolute',
        top: '3%',
        left: '20px',
        transform: 'translateY(-50%)',
      };

    return (
        <div className="logo" style={logoStyle}>
           TECH X
        </div>
    );
}

export default WordLogo;
