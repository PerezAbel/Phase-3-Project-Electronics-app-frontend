import React from 'react';

function SignUpButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
      Sign Up
    </button>
  );
}

function LogInButton({ onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Log In
    </button>
  );
}

export { SignUpButton, LogInButton };
