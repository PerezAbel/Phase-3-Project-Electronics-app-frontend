import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShippingFast, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/ImageGrid.css';

class ImageGrid extends React.Component {
  render() {
    return (  
      <>  
      <div className="image-grid">
        <div className="image-grid-item">
          <FontAwesomeIcon icon={faTruck} size="5x" color="grey" />
          <p>Fast Delivery</p>
        </div>
        <div className="image-grid-item">
          <FontAwesomeIcon icon={faShippingFast} size="5x" color="grey" />
          <p>Free Shipping</p>
        </div>
        <div className="image-grid-item">
          <FontAwesomeIcon icon={faDollarSign} size="5x" color="grey" />
          <p>Low Prices</p>
        </div>
        <div className="image-grid-item">
          <FontAwesomeIcon icon={faCheckCircle} size="5x" color="grey" />
          <p>High Availability</p>
        </div>
      </div>  
      </>
    );
  }
}

export default ImageGrid;
