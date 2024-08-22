// Cart.js
import '../css/Cart.css';
import React from 'react';
import { useCart } from './CartContext';  // Import the CartContext

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();  // Use the context

  // Calculate the total price for all items in the cart, considering quantities
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.Price) || 0; // Ensure price is a number
      const quantity = parseInt(item.Quantity, 10) || 0; // Ensure quantity is a number
      console.log(`Price: ${price}, Quantity: ${quantity}`); // Debugging
      return total + (price * quantity);
    }, 0).toFixed(2);
  };

  // Handle quantity change
  const handleQuantityChange = (index, quantity) => {
    const parsedQuantity = parseInt(quantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      updateQuantity(index, parsedQuantity);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-grid">
          <div className="cart-header">
            <div className="cart-header-item">Image</div>
            <div className="cart-header-item">Price (Ksh)</div>
            <div className="cart-header-item">Quantity</div>
            <div className="cart-header-item">Actions</div>
          </div>
          {cart.map((item, index) => (
            <div key={index} className="cart-row">
              <div className="cart-item">
                <img src={item.Cover} width="100px" height="150px" alt={item.Title} />
              </div>
              <div className="cart-item">
                <p>Price: Ksh {item.Price}</p>
              </div>
              <div className="cart-item">
                <input
                  type="number"
                  min="1"
                  value={item.Quantity || 1} // Default to 1 if Quantity is undefined
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
              </div>
              <div className="cart-item">
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <strong>Total: Ksh {calculateTotal()}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
