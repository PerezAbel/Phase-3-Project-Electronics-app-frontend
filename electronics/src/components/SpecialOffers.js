import React from 'react'  
import '../css/SpecialOffers.css'  

// Rating component
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); 
    }
    return <div className="card-rating">{stars}</div>;
  };


function SpecialOffers() {   


  return (  
    <>  
    <h1>Special offers</h1>
    <div className="card-container">
        <div className="card" >  
       
          <img src="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UF894,1000_QL80_.jpg" alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"></h3>
            <p className="card-description"></p>
            <p className="card-description">Hot Point Appliances</p>
            <Rating rating={4} /> 
            <button>  Add to Cart </button>
            <button>View Details</button>
          </div>
        </div> 
        <div className="card" >  
        <img src="https://intechcomputershop.co.ke/wp-content/uploads/2021/04/2.jpg" alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"></h3>
            <p className="card-description"></p>
            <p className="card-description">Hot Point Appliances</p>
            <Rating rating={4} /> 
            <button>  Add to Cart </button>
            <button>View Details</button>
          </div>
        </div> 
        <div className="card" >  
       
          <img src="https://www.phoneplacekenya.com/wp-content/uploads/2023/04/Oraimo-FreePods-4.jpg" alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"></h3>
            <p className="card-description"></p>
            <p className="card-description">Hot Point Appliances</p>
            <Rating rating={4} /> 
            <button>  Add to Cart </button>
            <button>View Details</button>
          </div>
        </div> 
        <div className="card" >  
        
          <img src="https://media.wired.com/photos/5d927e2d34cab0000861c499/master/pass/Transpo_UPSDrone-9.jpg" alt="Card" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"></h3>
            <p className="card-description"></p>
            <p className="card-description">Hot Point Appliances</p>
            <Rating rating={4} /> 
            <button>  Add to Cart </button>
            <button>View Details</button>
          </div>
        </div> 
    </div>    
    </>
   
  );
}  



export default SpecialOffers;
