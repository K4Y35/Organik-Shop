import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Product from "./../Product/Product";
import "./FourProductSection.css";
const FourProductSection = () => {
  return (
    <section className="FourProductSection">
      <div className="FourProductSection-title">
        <div>
          <h3 className="fancy-text">Offer</h3>
          <h2 className="we-offer-text">We Offer Organic For You</h2>
        </div>
        <button className="btn-yellow-lg">
          View All Product
          <BsFillArrowRightCircleFill className="btn-icon" />
        </button>
      </div>
      <div className="FourProductSection-cards">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default FourProductSection;
