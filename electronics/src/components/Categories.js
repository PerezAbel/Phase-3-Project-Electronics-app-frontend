import React, { useState } from 'react';

function SellDevice() {
  const [image, setImage] = useState('');
  const [device, setDevice] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      image: image,
      device: device,
      price: price
    };

    fetch('http://localhost:5000/electronics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Data saved successfully:', result);
        // Reset form fields
        setImage('');
        setDevice('');
        setPrice('');
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <>
     
    </>
  );
}

export default SellDevice;
