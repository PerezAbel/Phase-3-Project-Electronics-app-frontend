import React, { useState } from "react";
import { useCart } from './CartContext'; // Import the CartContext
import CircleCards from './CircleCards'
import ImageGrid from './ImageGrid';








function ShopAll({ shop = [] }) {
  const { addToCart } = useCart(); // Use the context
  const [message, setMessage] = useState(''); // State for the success message

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.Title} has been successfully added to the cart!`);
    setTimeout(() => setMessage(''), 3000); // Clear the message after 3 seconds
  };

  if (!shop.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Success message box */}
      {message && (
        <div className="success-message">
          {message}
        </div>
      )}

      <div className="card-container">
        {shop.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.Cover}
              width="250px"
              height="300px"
              className="card-img-top"
              alt={item.Title}
            />
            <div className="card-body">
              <h5 className="card-title">{item.Title}</h5>
              <h5>Price: {item.Price}</h5>
              <button
                onClick={() => handleAddToCart(item)}
                className="btn btn-success"
              >
                Add to Cart <i className="bi bi-basket"></i>
              </button>
            </div>
          </div>
        ))}    
      </div>   
      <CircleCards />       
      <ImageGrid />
    </div>
  );
}

export default ShopAll;
