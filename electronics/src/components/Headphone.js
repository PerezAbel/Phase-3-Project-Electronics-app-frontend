import React from 'react';
import '../css/SpecialOffers.css';
import { useCart } from './CartContext'; // Import CartContext

// Rating component
const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>); 
    }
    return <div className="card-rating">{stars}</div>;
};

function SpecialOffers() {
  const { addToCart } = useCart(); // Use the addToCart function from the context

  // Sample data for the cards
  const products = [
    {
      id: 1,
      title: "Hot Point Appliances",
      description: "Great quality appliances",
      price: 5000,
      image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UF894,1000_QL80_.jpg",
      rating: 4
    },
    {
      id: 2,
      title: "Hot Point Appliances",
      description: "Durable and affordable",
      price: 7500,
      image: "https://intechcomputershop.co.ke/wp-content/uploads/2021/04/2.jpg",
      rating: 4
    },
    {
      id: 3,
      title: "Oraimo FreePods 4",
      description: "High-quality sound and comfort",
      price: 2500,
      image: "https://www.phoneplacekenya.com/wp-content/uploads/2023/04/Oraimo-FreePods-4.jpg",
      rating: 4
    },
    {
      id: 4,
      title: "Drone UPS",
      description: "Fast delivery guaranteed",
      price: 15000,
      image: "https://media.wired.com/photos/5d927e2d34cab0000861c499/master/pass/Transpo_UPSDrone-9.jpg",
      rating: 4
    },  
    {
      id: 5,
      title: "C90 ULTRA watch Dual watch ",
      description: "Fast delivery guaranteed",
      price: 15000,
      image: "https://www.zdnet.com/a/img/resize/f5ec485dd50e544483b69fe109865b566cba06a3/2023/09/12/aec7c4a0-a40f-43c3-8c22-ecaa9bd7759f/img-0980.jpg?auto=webp&fit=crop&height=900&width=1200",
      rating: 4
    },   
    {
        id: 1,
        title: "Hot Point Appliances",
        description: "Great quality appliances",
        price: 5000,
        image: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UF894,1000_QL80_.jpg",
        rating: 4
      },
      {
        id: 2,
        title: "Hot Point Appliances",
        description: "Durable and affordable",
        price: 7500,
        image: "https://intechcomputershop.co.ke/wp-content/uploads/2021/04/2.jpg",
        rating: 4
      },
      {
        id: 3,
        title: "Oraimo FreePods 4",
        description: "High-quality sound and comfort",
        price: 2500,
        image: "https://www.phoneplacekenya.com/wp-content/uploads/2023/04/Oraimo-FreePods-4.jpg",
        rating: 4
      },
      {
        id: 4,
        title: "Drone UPS",
        description: "Fast delivery guaranteed",
        price: 15000,
        image: "https://media.wired.com/photos/5d927e2d34cab0000861c499/master/pass/Transpo_UPSDrone-9.jpg",
        rating: 4
      },  
      {
        id: 5,
        title: "C90 ULTRA watch Dual watch ",
        description: "Fast delivery guaranteed",
        price: 15000,
        image: "https://www.zdnet.com/a/img/resize/f5ec485dd50e544483b69fe109865b566cba06a3/2023/09/12/aec7c4a0-a40f-43c3-8c22-ecaa9bd7759f/img-0980.jpg?auto=webp&fit=crop&height=900&width=1200",
        rating: 4
      },
  ];

  return (
    <>
      <h1>Special Offers</h1>
      <div className="card-container">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{product.title}</h3>
              <p className="card-description">{product.description}</p>
              <p className="card-description">Price: Ksh {product.price}</p>
              <Rating rating={product.rating} />
              <button onClick={() => addToCart({
                Title: product.title,
                Price: product.price,
                Cover: product.image
              })}>
                Add to Cart
              </button>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpecialOffers;
