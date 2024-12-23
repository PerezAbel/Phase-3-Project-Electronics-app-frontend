import React, { useState, useEffect } from 'react';


function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            display: index === currentImageIndex ? 'block' : 'none',
            width: '100%', // Change width here (e.g., 80%)
            height: '800px', // Change height here (e.g., 300px)
            objectFit: 'cover', // Maintain the aspect ratio of the image    
            marginBottom: '30px'
          }}
        />
      ))}
    </div>
  );
}

export default ImageSlider;
