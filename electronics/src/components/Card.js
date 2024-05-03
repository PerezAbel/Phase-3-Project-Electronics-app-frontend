import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../css/Card.css';

function Card() {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/electronics')
      .then(response => response.json())
      .then(data => {
        setElectronics(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const removeFromCart = (id) => {
    fetch(`http://localhost:3000/electronics${id}`, {
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
            <button><FontAwesomeIcon icon={faCartPlus} /> Add to Cart </button>
            <button onClick={() => removeFromCart(electronic.id)}>View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
