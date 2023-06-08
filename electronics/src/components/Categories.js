import React from 'react';   

function Categories() {
  return (
    <>
      <div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#333' }}>
              Home Appliances
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#333' }}>
              Gadgets
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#333' }}>
              Gaming Consoles
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#333' }}>
              EarpIeces
            </a>
          </li>
          <li style={{ marginBottom: '8px' }}>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#333' }}>
              Phones
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Categories;