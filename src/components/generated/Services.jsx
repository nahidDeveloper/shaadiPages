import React from "react";
import './Services.css';

function Services() {
  return (
    <div className="vendors">
      <h1 className="header">Become a Vendor</h1>
      <p className="sub-header">Set up your free business page now</p>

      <div className="form-container">
        <div className="form-group">
          <label className="label">Business Name</label>
          <input type="text" className="input-field" placeholder="Type your business name" />
        </div>

        <div className="form-group">
          <label className="label">Contact Details</label>
          <input type="email" className="input-field" placeholder="Enter your email address" />
        </div>
      </div>

      <h2 className="services-header">Select your Services</h2>

      <div className="services-grid">
        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cda3464099056d83d62d309fe663a62e156c1412d3bf74a6897eb1f60cf13e88"
            alt="Venues"
            className="service-image"
          />
          <p className="service-text">Venues</p>
        </div>

        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a7637e8a36716960d6c0424ed941006fedffa032d0b143c2e694732731463a"
            alt="Caterers"
            className="service-image"
          />
          <p className="service-text">Caterers</p>
        </div>

        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f4569ebf8de2e1799127a64c1b4168363ca9690268acb009560f9d3cd4365f2"
            alt="Photographers"
            className="service-image"
          />
          <p className="service-text">Photographers</p>
        </div>

        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d16178cb4857bb48d663514c72c344bde7ef21450c05c3628bd7bf6ceb83b9c"
            alt="Florists"
            className="service-image"
          />
          <p className="service-text">Florists</p>
        </div>

        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7a7949c80eb498fcef31ab41ffb1e07c8ed5f1cd0092d7f37923e6f20057b76"
            alt="Decor"
            className="service-image"
          />
          <p className="service-text">Decor</p>
        </div>

        <div className="service-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3c9e4893ce8423341b60f945e81bc102c16a02dc07a1a2ba7a8d2866e0aa1cb"
            alt="DJs and Bands"
            className="service-image"
          />
          <p className="service-text">DJs and Bands</p>
        </div>
      </div>

      <div className="button-wrapper">
        <button className="submit-button">Sign up</button>
      </div>
    </div>
  );
}

export default Services;
