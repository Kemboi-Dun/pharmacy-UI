import React from "react";
import { brands } from "../_mock/Data";
import { brandObj_type } from "../store/Types";

const Brands = () => {
  return (
    <div className="brands-wrapper container-wrapper">
      <div className="container-header-section">
        <h1 className="container-header-title">Featured brands</h1>
        <a href="/">
          See all <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

      
      <ul className="brands-cards-wrapper">
        {brands?.map((brand: brandObj_type) => (
          <li key={brand.brandURL}>
            <div className="brand-image-wrapper">
              <img src={brand.brandURL} alt={brand.brand_name} />
            </div>
            <span>{brand.brand_name}</span>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Brands;
