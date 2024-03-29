import React, { useEffect, useState } from 'react';
import '../css/Card.css';

function Card() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/electronics')
      .then(response => response.json())
      .then(data => {
        setElectronics(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const removeFromCart = (id) => {
    fetch(`http://localhost:9292/electronics${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        console.log('Item removed successfully:', result);
        // Update the electronics state by filtering out the removed item
        setElectronics(electronics.filter(electronic => electronic.id !== id));
      })
      .catch(error => {
        console.error('Error removing item:', error);
      });
  };

  if (!electronics) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {electronics.map((electronic) => (
        <div className="card" key={electronic.id}>
          <img src={electronic.image} alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{electronic.device}</h3>
            <p className="card-description">{electronic.price}</p>
            <p className="card-description">Hot Point Appliances</p>
            <button>Add to Cart</button>
            <button onClick={() => removeFromCart(electronic.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
