import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '8px',
        }}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleSearch}
      >
        Search
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