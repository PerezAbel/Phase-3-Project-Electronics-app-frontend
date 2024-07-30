import React, { useState } from 'react';


function WearableTech() {
  const [message, setMessage] = useState("Hello, World!");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>fejfbhwfewjkgfberjg</h1>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default WearableTech;


/*
import React from 'react';
  


function WearableTech({ watch = [] }) {
  if (!watch.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {watch.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.Cover} width="250px" height="300px" className="card-img-top" alt={item.Title} />
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <h5>Price: {item.Price}</h5>
            <a href="#" className="btn btn-primary">
              Add to Cart <i className="bi bi-basket"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WearableTech;
*/