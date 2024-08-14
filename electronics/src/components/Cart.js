// Cart.js
import React from 'react';
import { useCart } from './CartContext';  // Import the CartContext

function Cart() {
  const { cart } = useCart();  // Use the context

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.Cover} width="100px" height="150px" alt={item.Title} />
              <div className="cart-item-info">
                <h5>{item.Title}</h5>
                <p>Price: {item.Price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
