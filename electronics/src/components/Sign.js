import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

function AnchorTag() {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',  
        position: 'relative',
        top: '5px',
        faRightFromBracket: '5px' // Adjust as needed
    };

    return (
        <a href="/example" style={linkStyle}>Log In</a>
    );
}

export default AnchorTag;
