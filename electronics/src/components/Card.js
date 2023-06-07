import React from 'react';  
import '../css/Card.css';   

function Card() {
  return (
    <div className="card">
      <img src="https://fdn2.mobgsm.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-2.jpg" alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">Sumsung galaxy S23 ultra</h3>
        <p className="card-description">KES 199,995.00</p>  
        <p className="card-description">Hot Point Aplliances</p>    
        <button>Add to Cart</button>  
        <button>Remove</button>     
        <a href="#" className="card-link">learn more</a>

      </div>
    </div>
  );
}

export default Card;
