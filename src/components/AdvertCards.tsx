import React from "react";

const AdvertCards = () => {
  return (
    <div className="container-wrapper ">
      <ul className="advert-cards-wrapper">
        <li className="advert-card">
          <div className="card-info">
            <div className="card-chip delivery-text">
              <i className="fa-solid fa-box-open"></i>
              Delivery
            </div>
            <span className="card-description">
              Enjoy Free Delivery within 2 hours
            </span>
            <div className="call-to-action-buttons">
              <button>Order Now</button>
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://i.postimg.cc/pXDG1QHc/delivery-man-shipping-box-and-smile-in-portrait-courier-service-and-e-commerce-isolated-on-png-trans.png"
              alt="male-delivery-person"
            />
          </div>
        </li>

        <li className="advert-card">
          <div className="card-info">
            <div className="card-chip membership-text">
              <i className="fa-solid fa-credit-card"></i>
              Membership card
            </div>
            <span className="card-description">
              You can enjoy a 5% discount using our health card
            </span>
            <div className="call-to-action-buttons">
              <button>Get Health Card</button>
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="card-image">
            <img
              src="https://i.postimg.cc/qMnSHV8L/credit-card-or-debit-card-mockup-psd-template-vol-10-309443-original-removebg-preview.png"
              alt="mock-up-card"
              className="card-mockup-image"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AdvertCards;
