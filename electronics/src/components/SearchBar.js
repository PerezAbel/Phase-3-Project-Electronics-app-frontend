import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon

function SearchBar({ data, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Handle search term input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Call the onSearch function passed from parent component with the new searchTerm
    onSearch(e.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '10px', // Adjusted margin-right   
          marginLeft: '10px',
          marginTop: '10px', 
          marginBottom: '10px'
        }}
        value={searchTerm}
        onChange={handleChange}
      />
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: 'gray',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',  
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => onSearch(searchTerm)} // Ensure onSearch is called with current searchTerm
      >
        <FaSearch style={{ marginRight: '5px' }} />
      </button>
    </div>
  );
}

export default SearchBar;
