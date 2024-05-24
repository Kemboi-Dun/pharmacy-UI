import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <span className="header-background-text">Pharmacy</span>
      <div className="header-wrapper">
        <div className="header-container-wrapper">
          <div className="header-description">
            <span className="header-info">
              online medicine delivery is the process of ordering medications
              through a website or app and having them delivered to your
              doorstep.
            </span>

            <div className="call-to-action-icons">
              <span>
                <i className="fa-solid fa-box"></i>
                Delivery to your doorstep.
              </span>
              <span>
                <i className="fa-solid fa-pills"></i>
                100% Genuine Medicines
              </span>
            </div>
          </div>

          <div className="header-center-image">
            <img
              src="https://i.postimg.cc/X7FybsDW/front-view-young-female-courier-green-uniform-removebg-preview.png"
              alt="front-view-young-female-courier-green-uniform-black-gloves-black-mask-holding-food-delivery-package-phone"
            />
          </div>

          <div className="header-cta-card">
            <div className="card-info">
              <p>Upload prescription</p>
              <i className="fa-solid fa-file-circle-check"></i>
            </div>
            <div className="card-buttons">
              <button>
                <i className="fa-solid fa-file-circle-plus"></i>
              </button>
              <button>Order Via Prescription</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
