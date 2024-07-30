import React from 'react';


function SignUp() {
  return ( 
   
   <>    
   <h1>SignUp</h1>  
  
        <h2>TECH X</h2>  
        <p>Enter the fyour details to create an account with Us</p>
        <form style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <div className="form-row" style={{ marginBottom: '20px' }}>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" style={{ width: '100%' }} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" style={{ width: '100%' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" style={{ width: '100%' }} />
          </div>
          <div className="form-row" style={{ marginBottom: '20px' }}>
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" style={{ width: '100%' }} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control" style={{ width: '100%' }}>
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" style={{ width: '100%' }} />
            </div>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="inputPhone">Phone Number</label>
            <input type="tel" className="form-control" id="inputPhone" placeholder="Phone Number" style={{ width: '100%' }} />
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Sign in</button>
        </form>
   
   </>
  );
}

export default SignUp;

