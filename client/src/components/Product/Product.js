import React from "react";
import { AiFillStar } from "react-icons/ai";
import borocolli from "../../resources/brocolli.png";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-div">
      <div className="product-card-tag">
        <h6>Vegetable</h6>
      </div>
      <img src={borocolli} alt="" />
      <h3 className="main-text">Calabrese Brocolli</h3>
      <div className="divider"></div>
      <div className="price-star-div">
        <h4 className="main-text">$13.00</h4>
        <div className="star-div">
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
          <AiFillStar className="star-color" />
        </div>
      </div>
    </div>
  );
};

export default Product;
