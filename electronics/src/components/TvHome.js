import React from 'react';    
import { useCart } from './CartContext';  // Import the CartContext

function TvHome({ television = [] }) {
  const { addToCart } = useCart();  // Use the context

  if (!television.length) {
    return <div>Loading...</div>;
  }



  return (
    <div className="card-container">
      {television.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.Cover} width="250px" height="300px" className="card-img-top" alt={item.Title} />
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <h5>Price: {item.Price}</h5>  
             <button onClick={() => addToCart(item)} className="btn btn-primary">
              Add to Cart <i className="bi bi-basket"></i>
            </button>    
          </div>
        </div>
      ))}
    </div>
  );
}

export default TvHome;

