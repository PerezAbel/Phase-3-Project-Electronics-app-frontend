import React, { useState } from 'react';
import '../css/NavBar.css';

function NavBar() {
  const [showForm, setShowForm] = useState(false);

  const handleFormLinkClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <nav>
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#" onClick={handleFormLinkClick}>Sign in</a>
        <a href="#">Cart</a>
        <a href="#">SellDevice</a>
      </nav>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
}

export default NavBar;