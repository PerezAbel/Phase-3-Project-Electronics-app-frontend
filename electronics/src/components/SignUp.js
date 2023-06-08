import React from 'react';   


function SignIn() {
  return (  
    <>  
  
    <h1> SignUp</h1>
    <form className="container" >
  <div className="mb-3">
    <label htmlFor="name" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Name</label>
    <input
      id="date"
      type="text"
      className="form-control"
      style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Email</label>
    <input
      id="email"
      type="text"
      className="form-control"
      style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Password</label>
    <input
      id="password"
      type="text"
      className="form-control"
      style={{ width: "100%", padding: "10px", fontFamily: "Arial, sans-serif", fontSize: "14px", backgroundColor: "#f1f1f1", border: "1px solid #ccc" }}
      required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label" style={{ fontWeight: "bold", color: "#333" }}>Amount</label>
    <input
      id="amount"
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

export default SignIn;