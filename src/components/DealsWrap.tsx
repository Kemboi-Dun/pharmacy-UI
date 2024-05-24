import React from "react";
import { productDeals } from "../_mock/Data";
import { productDealObj_type } from "../store/Types";

const DealsContainer = () => {
  return (
    <div className="deals-wrapper">
      <div className="deals-header-section">
        <h1 className="deals-header-title">Todays best deals for you!</h1>
        <a href="/">
          See all products <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

      <ul className="products-deals-wrapper">
        {productDeals?.map((product: productDealObj_type) => (
          <li key={product.product_name}>
            {product.product_discount > 0 && (
              <div className="discoount-badge">
                {((product.product_discount - product.product_price) /
                  product.product_price) *
                  100}{" "}
                % off
              </div>
            )}
            <div className="product-image-wrapper">
              <img src={product.productURL} alt={product.product_name} />
            </div>

            <div className="product-info-wrapper">
              <div className="category-wrapper">
                <p>{product.category}</p>
                <p>
                  <i className="fa-solid fa-star"></i>({product.product_rating})
                </p>
              </div>

              <h4>{product.product_name}</h4>
              <div className="product-call-to-action-wrapper">
                <button>
                  <i className="fa-solid fa-plus"></i>
                  Add to cart
                </button>

                {product.product_discount > 0 && (
                  <p className="grey-text">KES {product.product_discount}</p>
                )}

                <p className="product-price">KES {product.product_price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DealsWrap = () => {
  return (
    <div className="deals-wrap-container">
      <DealsContainer />
    </div>
  );
};

export default DealsWrap;
