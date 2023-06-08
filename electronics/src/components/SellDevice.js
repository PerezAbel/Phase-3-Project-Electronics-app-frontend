import React from 'react';

function SellDevice() {
  return (
    <>  
    

  <h1>Details</h1>
  <form className="container">
    <div className="mb-3">
      <label htmlFor="device" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Device</label>
      <input
        id="device"
        type="text"
        className="form-control"
        style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Description</label>
      <input
        id="description"
        type="text"
        className="form-control"
        style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="category" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Category</label>
      <input
        id="category"
        type="text"
        className="form-control"
        style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
        required
      />
    </div>
    <button className="btn" style={{ display: "inline-block", padding: "10px 20px", backgroundColor: "orange", color: "white", border: "none", cursor: "pointer" }}>Submit</button>
  </form>
</>








     
  );
}

export default SellDevice;