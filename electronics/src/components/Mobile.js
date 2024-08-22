// Mobile.js
import React, { useState } from 'react';
import { useCart } from './CartContext';  // Import the CartContext
import SearchBar from './SearchBar'; // Import the SearchBar component

function Mobile({ mobile = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();  // Use the context

  // Update the search term state
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter items based on searchTerm
  const filteredMobile = mobile.filter(item =>
    (item.Title && typeof item.Title === 'string' ? item.Title.toLowerCase() : '').includes(searchTerm.toLowerCase())
  );

  if (!filteredMobile.length) {
    return <div>No items found.</div>;
  }

  return (
    <div>
      <SearchBar data={mobile} onSearch={handleSearch} />
      <div className="card-container">
        {filteredMobile.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.Cover} width="250px" height="300px" className="card-img-top" alt={item.Title || 'Item image'} />
            <div className="card-body">
              <h5 className="card-title">{item.Title || 'No title'}</h5>
              <h5>Price: {item.Price}</h5>
              <button onClick={() => addToCart(item)} className="btn btn-primary">
                Add to Cart <i className="bi bi-basket"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobile;
