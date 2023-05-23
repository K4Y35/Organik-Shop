import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Product from "./../Product/Product";
import "./Products.css";

const Products = () => {
  return (
    <section className="Products-section">
      <div className="our-products-title">
        <h3 className="fancy-text">Categories</h3>
        <h2 className="our-products-text">Our Products</h2>
      </div>
      <div className="product-list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <button className="btn-green">
        Load More
        <BsFillArrowRightCircleFill className="btn-icon" />
      </button>
    </section>
  );
};

export default Products;
