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
      <h1>Details</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label" style={{ fontWeight: "bold", color: "black" }}>Image</label>
          <input
            id="image"
            type="text"
            className="form-control"
            style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "orange", border: "1px solid black", color: "black" }}
            value={image}
            onChange={e => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="device" className="form-label" style={{ fontWeight: "bold", color: "black" }}>Device</label>
          <input
            id="device"
            type="text"
            className="form-control"
            style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "orange", border: "1px solid black", color: "black" }}
            value={device}
            onChange={e => setDevice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label" style={{ fontWeight: "bold", color: "black" }}>Price</label>
          <input
            id="price"
            type="text"
            className="form-control"
            style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "orange", border: "1px solid black", color: "black" }}
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <button className="btn" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "black", color: "orange", border: "none", cursor: "pointer" }} type="submit">Submit</button>
      </form>
    </>
  );
}

export default SellDevice;
