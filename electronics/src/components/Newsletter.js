import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement logic to handle the submission, like sending the email to your backend or saving it in your database
    console.log('Email submitted:', email);
    // Clear the input field after submission
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '50px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Subscribe to our Newsletter</h2>  
      <p>Sign up to receive updates on new arrivals and special offers </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="emailInput" style={{ marginBottom: '10px' }}> Email:</label>
        <input
          type="email"
          id="emailInput"  
          backgroundColor = "gray"
          value={email}
          onChange={handleChange}
          placeholder="Your email address"
          style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          required
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
