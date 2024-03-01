import React from 'react';
import { useLocation } from 'react-router-dom';
import { WholesalerNavbar } from '../../Navbar/navbar';

function Mycart() {
  const location = useLocation();
  const price = location.state?.price || 0; 
  const productName = location.state?.productName || 0;
  const quantity = location.state?.quantity || 0; // Default to 0 if price is not passed
   // Default to 0 if price is not passed
  // Default to 0 if price is not passed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
    <WholesalerNavbar/>
    </div>
    <br/>
    <br/>
    <div className="container mt-5">
      <h2>Cart</h2>
      <p>Name:{productName}</p>
      <p>Quantity:{quantity}</p>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmit}>
        {/* Form fields for shop address, mobile number, etc. */}
      </form>
    </div>
    </div>
  );
}

export default Mycart;
