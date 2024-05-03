import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import search icon

function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = data.filter(item =>
      item.Device.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
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
          marginLeft: '2opx',
          marginTop: '10px'  , 
          marginBottom: '10px'

        }}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: 'gray',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',  
          marginRight: '50px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleSearch}
      >
        <FaSearch style={{ marginRight: '5px', marginBottom: '5px', marginTop: '5px'}} />
      
      </button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map(item => (
              <li key={item.id}>{item.Device}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
