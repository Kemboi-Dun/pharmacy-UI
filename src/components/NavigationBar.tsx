import React from "react";

const NavigationBar = () => {
  return (
    // transparent
    // https://i.postimg.cc/nhm3rfrR/medicare-logo-removebg-preview.png
    <>
      <nav className="nav-wrapper">
        {/* logo */}
        <div className="nav-logo">
          <img src="https://i.postimg.cc/RC7GFYKG/medicare-logo.png" alt="" />
          <hr />
        </div>
        <ul className="center-nav-container">
          <li className="location-dropdown">
            <label htmlFor="location">
              <i className="fa-solid fa-location-dot"></i> Select location
            </label>
            <select name="location" id="location">
              <option value="Kenya">Kenya</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Uganda">Uganda</option>
              <option value="Malawi">Malawi</option>
              <option value="Burundi">Burundi</option>
            </select>
          </li>
          <li className="search-bar-wrapper">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Medicine and healthcare items" />
          </li>
        </ul>

        <ul className="right-nav-container">
          <li className="service-dropdown">
            <label htmlFor="service">New</label>
            <select name="service" id="service">
              <option value="health_care-services">Health care services</option>
              <option value="medicine">Medicine</option>
            </select>
          </li>
          <li className="nav-offers">
            <i className="fa-solid fa-certificate"></i>
            Offers
          </li>
          <li className="nav-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </li>
          <li className="nav-login">
            <i className="fa-regular fa-user"></i>
            Login
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
