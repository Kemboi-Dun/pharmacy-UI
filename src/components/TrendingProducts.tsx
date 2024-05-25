import React from "react";
import { trendingProducts } from "../_mock/Data";
import { trendingProductObj_type } from "../store/Types";

const ProductsHeaderWrap = () => {
  type navLink_type = {
    name: string;
  };

  const navLinks = [
    {
      name: "Cradiology",
    },
    {
      name: "Neurology",
    },
    {
      name: "Pediatrics",
    },
    {
      name: "Gastroenetreology",
    },
    {
      name: "Nephrology",
    },
    {
      name: "Gynecology",
    },
    {
      name: "Orthopedics",
    },
    {
      name: "Urology",
    },
  ];

  return (
    <>
      <div className="container-header-section">
        <h1 className="container-header-title">Trending products for you!</h1>
        <a href="/">
          See all products<i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>

      <ul className="section-navbar">
        {navLinks?.map((link: navLink_type) => (
          <li key={link.name}>{link.name}</li>
        ))}
      </ul>
    </>
  );
};

const ProductsWrap = () => {
  return (
    <>
      <ul className="products-section-wrapper">
        {trendingProducts?.map((product: trendingProductObj_type) => (
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

const TrendingProducts = () => {
  return (
    <div className="tending-products-wrapper container-wrapper">
      <ProductsHeaderWrap />
      <ProductsWrap />
    </div>
  );
};

export default TrendingProducts;
