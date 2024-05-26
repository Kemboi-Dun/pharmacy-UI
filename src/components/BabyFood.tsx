import React from "react";
import { babyFoodProducts } from "../_mock/Data";
import { babyProductObj_type } from "../store/Types";

const BabyFoodHeader = () => {
  return (
    <div className="container-header-section">
      <h1 className="container-header-title">Baby Food Collection</h1>
      <a href="/">
        See all products<i className="fa-solid fa-arrow-right-long"></i>
      </a>
    </div>
  );
};

const BabyFoodProducts = () => {
  return (
    <>
      <ul className="products-section-wrapper">
        {babyFoodProducts?.map((product: babyProductObj_type) => (
          <li key={product.product_name}>
            {product.product_discount > 0 && (
              <div className="discount-badge">
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
    </>
  );
};

const BabyFood = () => {
  return (
    <div className="baby-products-wrapper container-wrapper">
      <BabyFoodHeader />
      <BabyFoodProducts />
    </div>
  );
};

export default BabyFood;
