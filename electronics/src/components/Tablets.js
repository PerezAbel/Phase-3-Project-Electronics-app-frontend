import React from "react";

function Tablets({ tablets = [] }) {
  if (!Array.isArray(tablets) || !tablets.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {tablets.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.Cover} width="250px" height="300px" className="card-img-top" alt={item.Title} />
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <h5>Price: {item.Price}</h5>
            <a href="#" className="btn btn-primary">
              Order <i className="bi bi-basket"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tablets;
